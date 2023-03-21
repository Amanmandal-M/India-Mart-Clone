const mongoose = require('mongoose');

const CartSchema = mongoose.Schema({
    title:String,
    price:String,
    image:String
})

const CartModel = mongoose.model('Cart',CartSchema);


module.exports = { CartModel };

