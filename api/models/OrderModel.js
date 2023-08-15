const mongoose = require('mongoose');
const PizzaModel = require('./PizzaModel');
const ToppingModel = require('./ToppingModel');
const SideDishModel = require('./SideDishModel');
const ComboModel = require('./ComboModel');

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, required: true, immutable: true, ref: 'User' },
    items: {
        pizzas: [{
            _id: {type: mongoose.Schema.Types.ObjectId, required: true, immutable: true, ref: 'Pizza'},
            size: {type: String, enum: ['S', 'M', 'L'], required: true, immutable: true},
            toppings: [{type: mongoose.Schema.Types.ObjectId, immutable: true, ref: 'Topping'}],
            quantity: {type: Number, required: true, immutable: true}
        }],
        sideDishes: [{
            _id: {type: mongoose.Schema.Types.ObjectId, required: true, immutable: true, ref: 'SideDish'},
            quantity: {type: Number, required: true, immutable: true}
        }],
        combos: [{
            _id: {type: mongoose.Schema.Types.ObjectId, required: true, immutable: true, ref: 'Combo'},
            quantity: {type: Number, required: true, immutable: true}
        }]
    },
    status: { type: String, enum: ['pending', 'paid', 'cancel'], default: 'pending', required: true },
    price: { type: Number, min: 0, immutable: true }
}, {
    timestamps: true,
});

orderSchema.pre('save', async function (next) {
    try {
        let totalPrice = 0;

        for (const pizzaItem of this.items.pizzas) {
            const pizza = await PizzaModel.findById(pizzaItem._id);
            if (!pizza) {
                throw new Error(`Pizza with id ${pizzaItem._id} not found`);
            }

            let itemPrice;
            if (pizzaItem.size === "S") itemPrice = pizza.priceS;
            else if (pizzaItem.size === "M") itemPrice = pizza.priceM;
            else if (pizzaItem.size === "L") itemPrice = pizza.priceL;

            for (const toppingId of pizzaItem.toppings) {
                const topping = await ToppingModel.findById(toppingId);
                if (!topping) {
                    throw new Error(`Topping with id ${toppingId} not found`);
                }
                itemPrice += topping.price;
            }

            totalPrice += itemPrice * pizzaItem.quantity;
        }

        for (const sideDishItem of this.items.sideDishes) {
            const sideDish = await SideDishModel.findById(sideDishItem._id);
            if (!sideDish) {
                throw new Error(`Side dish with id ${sideDishItem._id} not found`);
            }

            totalPrice += sideDish.price * sideDishItem.quantity;
        }

        for (const comboItem of this.items.combos) {
            const combo = await ComboModel.findById(comboItem._id);
            if (!combo) {
                throw new Error(`Combo with id ${comboItem._id} not found`);
            }

            totalPrice += combo.price * comboItem.quantity;
        }

        this.price = totalPrice;
        next();
    } catch (error) {
        next(error);
    }
});

const OrderModel = mongoose.model('Order', orderSchema);

module.exports = OrderModel;