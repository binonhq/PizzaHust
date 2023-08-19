const mongoose = require('mongoose');

const sideDishSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    category: { type: String, enum: ['food', 'drink'], required: true},
    price: { type: Number, min: 0, required: true },
    orderCount: { type: Number, min: 0, default: 0 }
}, {
    timestamps: true
});

const SideDishModel = mongoose.model('SideDish', sideDishSchema);

module.exports = SideDishModel;