const mongoose = require('mongoose');

const BrickSchema = mongoose.Schema({
    Title:String,
    Price:Number,
    ImageUrl:String,
    Description:Object
})

const BrickModel = mongoose.model("Brick",BrickSchema);

module.exports = {BrickModel}