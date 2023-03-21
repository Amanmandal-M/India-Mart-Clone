const express = require('express');
const { PostCart , DeleteCart } = require('../Controllers/CartController');


const CartRouter = express.Router();


CartRouter.post('/cart', PostCart )

CartRouter.delete('/cart/:id', DeleteCart )


module.exports = { CartRouter };