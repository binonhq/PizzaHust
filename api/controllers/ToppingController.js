const ToppingModel = require('../models/ToppingModel');

const getAllToppings = async (req, res) => {
    try {
        const toppings = await ToppingModel.find();
        res.status(200).json(toppings);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get all toppings' });
    }
};

const getToppingById = async (req, res) => {
    const { id } = req.params;
    try {
        const topping = await ToppingModel.findById(id);
        if (!topping) {
            return res.status(404).json({ error: 'Topping not found' });
        }
        res.status(200).json(topping);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get topping by id' });
    }
};

const createTopping = async (req, res) => {
    const {
        name,
        description,
        imageUrl,
        price
    } = req.body;
    try {
        const topping = new ToppingModel({
            name,
            description,
            imageUrl,
            price,
            category: "topping"
        });
        await topping.save();
        res.status(201).json(topping);
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ "message": error.message });
        } else {
            res.status(500).json({ error: 'Failed to create topping' });
        }
    }
};

const updateToppingById = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    try {
        const topping = await ToppingModel.findByIdAndUpdate(id, updateData, { new: true });
        if (!topping) {
            return res.status(404).json({ error: 'Topping not found' });
        }
        res.json(topping);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update topping by id' });
    }
};

const deleteToppingById = async (req, res) => {
    const { id } = req.params;
    try {
        const topping = await ToppingModel.findByIdAndDelete(id);
        if (!topping) {
            return res.status(404).json({ error: 'Topping not found' });
        }
        res.status(200).json({ message: "Topping deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete topping' });
    }
};

module.exports = {
    getAllToppings,
    getToppingById,
    createTopping,
    updateToppingById,
    deleteToppingById
};