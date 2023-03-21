const mongoose = require('mongoose');

const CartSchema = mongoose.Schema({
    Title:String,
    Price:Number,
    ImageUrl:String,
    Description:Object
})

const CartModel = mongoose.model('Cart',CartSchema);


module.exports = { CartModel };

