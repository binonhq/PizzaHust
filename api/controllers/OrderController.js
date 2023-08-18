const OrderModel = require('../models/OrderModel');
const UserModel = require("../models/UserModel");

const getAllOrders = async (req, res) => {
    try {
        const orders = await OrderModel.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get all orders' });
    }
};

const getOrderById = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await OrderModel.findById(id);
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get order by id' });
    }
};

const createOrder = async (req, res) => {
    const {
        user,
        items
    } = req.body;
    try {
        const order = new OrderModel({
            user,
            items
        });

        const orderingUser = await UserModel.findById(user);
        if (!orderingUser) {
            return res.status(404).json({"message": "User not found"});
        }
        await order.save();
        orderingUser.orders.push(order._id);
        await orderingUser.save();
        res.status(201).json(order);
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({"message": error.message});
        } else {
            console.log(error);
            res.status(500).json({ error: 'Failed to create order' });
        }
    }
};

const updateOrderById = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    try {
        const order = await OrderModel.findByIdAndUpdate(id, updateData, { new: true });
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }
        res.json(order);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update order by id' });
    }
};

const deleteOrderById = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await OrderModel.findByIdAndDelete(id);
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }
        res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete order' });
    }
};

module.exports = {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrderById,
    deleteOrderById
};