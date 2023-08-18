const PizzaModel = require('../models/PizzaModel');

const getAllPizzas = async (req, res) => {
    try {
        const pizzas = await PizzaModel.find();
        res.status(200).json(pizzas);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get all pizzas' });
    }
};

const getPizzaById = async (req, res) => {
    const { id } = req.params;
    try {
        const pizza = await PizzaModel.findById(id);
        if (!pizza) {
            return res.status(404).json({ error: 'Pizza not found' });
        }
        res.status(200).json(pizza);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get pizza by id' });
    }
};

const createPizza = async (req, res) => {
    const {
        name,
        description,
        imageUrl,
        priceS,
        priceM,
        priceL
    } = req.body;
    const price = {
        S: priceS,
        M: priceM,
        L: priceL
    }
    try {
        const pizza = new PizzaModel({
            name,
            description,
            imageUrl,
            price
        });
        await pizza.save();
        res.status(201).json(pizza);
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ "message": error.message });
        } else {
            res.status(500).json({ error: 'Failed to create pizza' });
        }
    }
};

const updatePizzaById = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    try {
        const pizza = await PizzaModel.findByIdAndUpdate(id, updateData, { new: true });
        if (!pizza) {
            return res.status(404).json({ error: 'Pizza not found' });
        }
        res.json(pizza);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update pizza by id' });
    }
};

const deletePizzaById = async (req, res) => {
    const { id } = req.params;
    try {
        const pizza = await PizzaModel.findByIdAndDelete(id);
        if (!pizza) {
            return res.status(404).json({ error: 'Pizza not found' });
        }
        res.status(200).json({ message: "Pizza deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete pizza' });
    }
};

const getTopPizzas = async (req, res) => {
    try {
        const topPizzas = await PizzaModel.find()
            .sort({ orderCount: -1 }) // Sort in descending order of orderCount
            .limit(5); // Limit the result to the top 5 pizzas

        res.status(200).json(topPizzas);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch top pizzas' });
    }
};

module.exports = {
    getAllPizzas,
    getPizzaById,
    createPizza,
    updatePizzaById,
    deletePizzaById,
    getTopPizzas
};