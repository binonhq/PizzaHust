const jwt = require('jsonwebtoken');
const UserModel = require('../models/UserModel');
require('dotenv').config();

const login = async (req, res) => {
    const { username } = req.body;
    const user = await UserModel.findOne({ username: username });
    if (!user || !user.validatePassword(req.body.password)) {
        return res.status(400).send({ message: "Fail to log in" });
    }
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, { expiresIn: '7d' }, (err, token) => {
        if (err) {
            throw err;
        }
        res.cookie('token', token).json(user);
        res.status(200).json({ token: token, isAdmin: user.isAdmin });
    });
}
const isReadyForSigningUp = async (req, res, next) => {
    const { username } = req.body;

    const existingUser = await UserModel.findOne({ username: username });
    if (existingUser) {
        return res.status(400).send({ message: "Username has been taken" });
    }

    next();
}

const changePassword = async (req, res) => {
    const userId = req.user._id;
    const { oldPassword, newPassword } = req.body;

    try {
        const user = await UserModel.findById(userId);
        if (!user || !user.validatePassword(oldPassword)) {
            return res.status(400).send({ message: "Incorrect old password" });
        }

        user.setPassword(newPassword);
        await user.save();

        res.status(200).json({ message: "Password changed successfully" });
    } catch (error) {
        res.status(500).send({ message: "An error occurred while changing the password" });
    }
}

const authenticateToken = async (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) {
        return res.status(401).send({ message: "Access denied. Token missing." });
    }

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        const user = await UserModel.findById(decoded._id);

        if (!user) {
            return res.status(401).send({ message: "Access denied. User not found." });
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(401).send({ message: "Access denied. Invalid token." });
    }
};

const logout = async (req, res) => {
    res.cookie('token', '').json(true);
}

const nowProfile = async (req, res) => {
    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, process.env.TOKEN_SECRET, {}, (err, user) => {
            if (err) {
                throw err;
            }
            res.json(user)
        })
    } else res.json(null)
}

module.exports = {
    login,
    isReadyForSigningUp,
    changePassword,
    authenticateToken,
    logout,
    nowProfile,
};