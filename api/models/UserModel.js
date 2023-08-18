const mongoose = require('mongoose');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, immutable: true},
    passwordHash: {type: String, required: true},
    salt: {type: String, required: true, immutable: true},
    isAdmin: {type: Boolean, required: true, default: false},
    name: {type: String, required: true},
    email: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    address: {type: String, required: true},
    orders: [{type: mongoose.Schema.Types.ObjectId, ref: 'Order'}],
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