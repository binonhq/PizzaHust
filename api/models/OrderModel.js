const mongoose = require('mongoose');
const PizzaModel = require('./PizzaModel');
const ToppingModel = require('./ToppingModel');
const SideDishModel = require('./SideDishModel');
const ComboModel = require('./ComboModel');

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, required: true, immutable: true, ref: 'User' },
    items: {
        pizzas: [{
            pizza: { type: mongoose.Schema.Types.ObjectId, immutable: true, ref: 'Pizza' },
            size: { type: String, immutable: true },
            toppings: { type: String },
            crust: { type: String },
            quantity: { type: Number, immutable: true },
            price: { type: Number }
        }],
        sideDishes: [{
            sideDish: { type: mongoose.Schema.Types.ObjectId, immutable: true, ref: 'SideDish' },
            quantity: { type: Number, immutable: true },
            price: { type: Number },
        }],
        combos: [{
            combo: { type: mongoose.Schema.Types.ObjectId, immutable: true, ref: 'Combo' },
            quantity: { type: Number, immutable: true },
            price: { type: Number }
        }]
    },
    status: { type: String, enum: ['pending', 'paid', 'cancel'], default: 'pending' },
    paymentMethod: { type: String, enum: ['cod', 'online'], default: 'online' },
    totalPrice: { type: Number, min: 0, immutable: true },
    feePrice: { type: Number, min: 0, immutable: true },
    address: { type: String },
}, {
    timestamps: true,
});

const OrderModel = mongoose.model('Order', orderSchema);

module.exports = OrderModel;