const SideDishModel = require('../models/SideDishModel');

const getAllSideDishes = async (req, res) => {
    try {
        const dishes = await SideDishModel.find();
        res.status(200).json(dishes);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get all dishes' });
    }
};

const getSideDishById = async (req, res) => {
    const { id } = req.params;
    try {
        const dish = await SideDishModel.findById(id);
        if (!dish) {
            return res.status(404).json({ error: 'SideDish not found' });
        }
        res.status(200).json(dish);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get dish by id' });
    }
};

const createSideDish = async (req, res) => {
    const {
        name,
        description,
        imageUrl,
        price
    } = req.body;
    try {
        const dish = new SideDishModel({
            name,
            description,
            imageUrl,
            price
        });
        await dish.save();
        res.status(201).json(dish);
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({"message": error.message});
        } else {
            res.status(500).json({ error: 'Failed to create dish' });
        }
    }
};

const updateSideDishById = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    try {
        const dish = await SideDishModel.findByIdAndUpdate(id, updateData, { new: true });
        if (!dish) {
            return res.status(404).json({ error: 'SideDish not found' });
        }
        res.json(dish);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update dish by id' });
    }
};

const deleteSideDishById = async (req, res) => {
    const { id } = req.params;
    try {
        const dish = await SideDishModel.findByIdAndDelete(id);
        if (!dish) {
            return res.status(404).json({ error: 'SideDish not found' });
        }
        res.status(200).json({ message: "SideDish deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete dish' });
    }
};

module.exports = {
    getAllSideDishes,
    getSideDishById,
    createSideDish,
    updateSideDishById,
    deleteSideDishById
};