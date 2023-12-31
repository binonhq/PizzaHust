const OrderModel = require('../models/OrderModel');
const PizzaModel = require('../models/PizzaModel');
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
        const order = await OrderModel.findById(id).populate({
            path: 'items',
            populate: [
                {
                    path: 'pizzas.pizza',
                    model: 'Pizza'
                },
                {
                    path: 'combos.combo',
                    model: 'Combo',
                    populate: [
                        {
                        path: 'comboData.pizzas._id',
                        model: 'Pizza'
                        },
                        {
                            path: 'comboData.sideDishes._id',
                            model: 'SideDish'
                        },
                    ]
                },
                {
                    path: 'sideDishes.sideDish',
                    model: 'SideDish'
                }
            ]
        });
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
        items,
        totalPrice,
        feePrice,
        paymentMethod,
        address,
    } = req.body;
    try {
        const order = new OrderModel({
            user,
            items,
            totalPrice,
            feePrice,
            paymentMethod,
            address,
        });
        const orderingUser = await UserModel.findById(user);
        if (!orderingUser) {
            return res.status(404).json({ "message": "User not found" });
        }
        for (const item of items.pizzas) {
            try {
                const ordPizza = await PizzaModel.findById(item.pizza);
                if (ordPizza) {
                    ordPizza.orderCount += 1;
                    await ordPizza.save();
                }
            } catch (error) {
                console.error(`Error updating pizza with ID ${item.pizza}:`, error);
            }
        }
        await order.save();
        orderingUser.orders.push(order._id);
        await orderingUser.save();
        res.status(201).json(order);
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ "message": error.message });
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