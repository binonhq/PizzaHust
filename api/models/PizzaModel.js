const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    category: { type: String, immutable: true, default: 'pizza'},
    price: {
        S: {type: Number, min: 0, required: true},
        M: {type: Number, min: 0, required: true},
        L: {type: Number, min: 0, required: true}
    },
    orderCount: { type: Number, min: 0, default: 0 }
}, {
    timestamps: true
});

const PizzaModel = mongoose.model('Pizza', pizzaSchema);

module.exports = PizzaModel;