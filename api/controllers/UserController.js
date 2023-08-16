const UserModel = require('../models/UserModel');

const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get all users' });
    }
};

const getUserByToken = async (req, res) => {
    // const customerId = req.customerId;
    // if (!customerId) {
    //     return res.status(401).json({ error: 'Invalid token' });
    // }
    // try {
    //     const customer = await UserController.findById(customerId).populate('cart.productId').populate('wishList.productId');
    //     if (!customer) {
    //         return res.status(404).json({ error: 'UserController not found' });
    //     }
    //     res.json(customer);
    // } catch (error) {
    //     res.status(500).json({ error: 'Failed to fetch customer' });
    // }
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await UserModel.findById(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get user by id' });
    }
};

const createUser = async (req, res) => {
    const {
        username,
        password,
        name,
        email,
        phoneNumber,
        address
    } = req.body;
    try {
        const user = new UserModel({
            username,
            name,
            email,
            phoneNumber,
            address
        });
        user.setPassword(password);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({"message": error.message});
        } else {
            res.status(500).json({ error: 'Failed to create user' });
        }
    }
};

const updateUserById = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    try {
        const user = await UserModel.findByIdAndUpdate(id, updateData, { new: true });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update user by id' });
    }
};

const deleteUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await UserModel.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete user' });
    }
};

module.exports = {
    getAllUsers,
    getUserByToken,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById
};