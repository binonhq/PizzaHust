const mongoose = require('mongoose');
const PizzaModel = require('./PizzaModel');
const ToppingModel = require('./ToppingModel');

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, required: true, immutable: true, ref: 'User' },
    items: [{
        pizza: { type: mongoose.Schema.Types.ObjectId, required: true, immutable: true, ref: 'Pizza' },
        pizzaSize: { type: String, enum: ['S', 'M', 'L'], required: true, immutable: true },
        toppings: [{ type: mongoose.Schema.Types.ObjectId, immutable: true, ref: 'Topping' }],
        quantity: { type: Number, required: true, immutable: true }
    }],
    status: { type: String, enum: ['pending', 'paid', 'cancel'], default: 'pending', required: true },
    price: { type: Number, min: 0, immutable: true }
}, {
    timestamps: true,
});

orderSchema.pre('save', async function (next) {
    try {
        let totalPrice = 0;

        for (const item of this.items) {
            const pizza = await PizzaModel.findById(item.pizza);
            if (!pizza) {
                throw new Error(`Pizza with id ${item.pizza} not found`);
            }

            let itemPrice;
            if (item.pizzaSize === "S") itemPrice = pizza.priceS;
            else if (item.pizzaSize === "M") itemPrice = pizza.priceM;
            else if (item.pizzaSize === "L") itemPrice = pizza.priceL;

            for (const toppingId of item.toppings) {
                const topping = await ToppingModel.findById(toppingId);
                if (!topping) {
                    throw new Error(`Topping with id ${toppingId} not found`);
                }
                itemPrice += topping.price;
            }

            totalPrice += itemPrice * item.quantity;
        }

        this.price = totalPrice;
        next();
    } catch (error) {
        next(error);
    }
});

const OrderModel = mongoose.model('Order', orderSchema);

module.exports = OrderModel;