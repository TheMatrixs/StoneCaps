const express = require('express');
const router = express.Router();

const { 
    createOrder,
    getAllOrdersByUserId,
    getOrderById

} = require('../DB/orders.js');

// GET /api/order
router.post ('/', async (req, res, next) => {
    try {
        const user = await req.user;
        const orders = await getAllOrdersByUserId(user.id);
        res.send(orders);

    } catch (error) {
        next({ error: error});
    }
})

// GET /api/order/:orderId
router.post ('/', async (req, res, next) => {
    try {
        const { orderId } = req.params;
        const order = await getOrderById(orderId);
        res.send(order);

    } catch (error) {
        next({ error: error});
    }
})

// POST /api/order

router.post ('/', async (req, res, next) => {
    try {
        const user = await req.user;
        const newOrder = await createOrder(user.id);
        res.send(newOrder);

    } catch (error) {
        next({ error: error});
    }
})

module.exports = router;