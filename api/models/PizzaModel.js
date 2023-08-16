const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    priceS: { type: Number, min: 0, required: true },
    priceM: { type: Number, min: 0, required: true },
    priceL: { type: Number, min: 0, required: true }
}, {
    timestamps: true
});

const PizzaModel = mongoose.model('Pizza', pizzaSchema);

module.exports = PizzaModel;