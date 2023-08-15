const mongoose = require('mongoose');

const toppingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    price: { type: Number, min: 0, required: true }
}, {
    timestamps: true
});

const ToppingModel = mongoose.model('Topping', toppingSchema);

module.exports = ToppingModel;