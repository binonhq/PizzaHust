const PizzaModel = require('../models/PizzaModel');
const ToppingModel = require('../models/ToppingModel');
const SideDishModel = require('../models/SideDishModel')
const ComboModel = require('../models/ComboModel');

const searchAllProduct = async (req, res) => {
    try {
        const pizzas = await PizzaModel.find();
        const toppings = await ToppingModel.find();
        const sideDishes = await SideDishModel.find();
        const combos = await ComboModel.find();

        const allProducts = {
            pizzas,
            toppings,
            sideDishes,
            combos
        };

        res.status(200).json(allProducts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get products' });
    }
};

const searchProductById = async (req, res) => {
    const { category, productId } = req.body;
    if (category === 'pizza') {
        try {
            const pizza = await PizzaModel.findById(productId);
            if (!pizza) {
                return res.status(404).json({ error: 'Pizza not found' });
            }
            res.status(200).json(pizza);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get pizza by id' });
        }
    }
    else if (category === 'topping') {
        try {
            const topping = await ToppingModel.findById(productId);
            if (!topping) {
                return res.status(404).json({ error: 'Topping not found' });
            }
            res.status(200).json(topping);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get topping by id' });
        }
    }
    else if (category === 'food' || category === 'drink') {
        try {
            const sideDish = await SideDishModel.findById(productId);
            if (!sideDish) {
                return res.status(404).json({ error: 'Side dish not found' });
            }
            res.status(200).json(sideDish);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get side dish by id' });
        }
    }
    else if (category === 'combo') {
        try {
            const combo = await ComboModel.findById(productId);
            if (!combo) {
                return res.status(404).json({ error: 'Combo not found' });
            }
            res.status(200).json(combo);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get combo by id' });
        }
    }
};

module.exports = {
    searchAllProduct,
    searchProductById
};