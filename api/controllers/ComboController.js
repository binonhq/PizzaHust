const ComboModel = require('../models/ComboModel');

const getAllCombos = async (req, res) => {
    try {
        const combos = await ComboModel.find();
        res.status(200).json(combos);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get all combos' });
    }
};

const getComboById = async (req, res) => {
    const { id } = req.params;
    try {
        const combo = await ComboModel.findById(id);
        if (!combo) {
            return res.status(404).json({ error: 'Combo not found' });
        }
        res.status(200).json(combo);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get combo by id' });
    }
};

const createCombo = async (req, res) => {
    const {
        name,
        description,
        imageUrl,
        comboData,
        price
    } = req.body;
    try {
        const combo = new ComboModel({
            name,
            description,
            imageUrl,
            comboData,
            price,
            category: "combo",
        });
        await combo.save();
        res.status(201).json(combo);
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ "message": error.message });
        } else {
            res.status(500).json({ error: 'Failed to create combo' });
        }
    }
};

const updateComboById = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    try {
        const combo = await ComboModel.findByIdAndUpdate(id, updateData, { new: true });
        if (!combo) {
            return res.status(404).json({ error: 'Combo not found' });
        }
        res.json(combo);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update combo by id' });
    }
};

const deleteComboById = async (req, res) => {
    const { id } = req.params;
    try {
        const combo = await ComboModel.findByIdAndDelete(id);
        if (!combo) {
            return res.status(404).json({ error: 'Combo not found' });
        }
        res.status(200).json({ message: "Combo deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete combo' });
    }
};

module.exports = {
    getAllCombos,
    getComboById,
    createCombo,
    updateComboById,
    deleteComboById
};