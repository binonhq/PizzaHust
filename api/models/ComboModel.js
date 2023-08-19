const mongoose = require('mongoose');

const comboSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    comboData: {
        pizzas: [{
            _id: { type: mongoose.Schema.Types.ObjectId, ref: 'Pizza' },
            size: { type: String, enum: ['S', 'M', 'L'] },
            toppings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Topping' }],
            quantity: { type: Number, min: 0 }
        }],
        sideDishes: [{
            _id: { type: mongoose.Schema.Types.ObjectId, ref: 'SideDish' },
            quantity: { type: Number, min: 0 }
        }]
    },
    category: { type: String, immutable: true, default: 'combo' },
    price: { type: Number, min: 0, required: true },
    orderCount: { type: Number, min: 0, default: 0 }
}, {
    timestamps: true
});

const ComboModel = mongoose.model('Combo', comboSchema);

module.exports = ComboModel;