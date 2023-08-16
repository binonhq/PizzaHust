const mongoose = require('mongoose');

const comboSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    comboData: {
        pizzas: [{
            _id: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Pizza'},
            size: {type: String, enum: ['S', 'M', 'L'], required: true, immutable: true},
            toppings: [{type: mongoose.Schema.Types.ObjectId, ref: 'Topping'}],
            quantity: {type: Number, required: true, immutable: true}
        }],
        sideDishes: [{
            _id: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'SideDish'},
            quantity: {type: Number, required: true, immutable: true}
        }]
    },
    price: { type: Number, min: 0, required: true }
}, {
    timestamps: true
});

const ComboModel = mongoose.model('Combo', comboSchema);

module.exports = ComboModel;