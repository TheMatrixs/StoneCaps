const express = require('express');
const router = express.Router();
const { 
    getCartByUserId
} = require('../DB/cart.js')
const {
    createCartItem,
    getAllCartItemsByCartId,
    deleteCartItemById

} = require('../DB/cartItems.js')
//GET /api/cart
router.get('/', async (req, res, next) => {
    try{
        const user = await req.user;
        const cart = await getCartByUserId(user.id);
        const cartItems = await getAllCartItemsByCartId(cart.id);
        console.log("CARTITEMS", cartItems, "USER", user);
        res.send(cartItems);

    } catch (error) {
        next({ error: error});
    }
});
//POST /api/cart
router.post('/', async (req, res, next) => {
    try {
        const user =  req.user;
        console.log("api/cart user", user);
        const { product } = req.body;
        console.log("api/cart product", product);
        const cart = await getCartByUserId(user.id);
        const newCartItem = await createCartItem(product.productId, cart.id, product.quantity);
        console.log("CART:", cart, "NEWCART-ITEM:", newCartItem);
        res.send(newCartItem);

    } catch (error) {
        next({ error: error});
    }
})
//DELETE /api/cart/:cartItemId
router.delete('/:cartItemId', async (req, res, next) => {
    const { cartItemId } = req.params;
    
    try {
        const deletedCartItem = await deleteCartItemById(cartItemId);
        res.send(deletedCartItem);
        
    } catch (error) {
        next({ error: error});
    }
})

module.exports = router;