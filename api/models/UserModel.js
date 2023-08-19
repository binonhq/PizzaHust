const mongoose = require('mongoose');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, immutable: true, unique: true},
    passwordHash: {type: String, required: true},
    salt: {type: String, required: true, immutable: true},
    isAdmin: {type: Boolean, required: true, default: false},
    name: {type: String, required: true},
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        match: /^\d{10}$/
    },
    address: {type: String, required: true},
    orders: [{type: mongoose.Schema.Types.ObjectId, ref: 'Order'}],
    status: { type: String, enum: ['active', 'blocked'], default: 'active'},
}, {
    timestamps: true
});

userSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.passwordHash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, `sha512`).toString(`hex`);
};

userSchema.methods.validatePassword = function (password) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, `sha512`).toString(`hex`);
    return this.passwordHash === hash;
};

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;