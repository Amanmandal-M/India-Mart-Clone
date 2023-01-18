const mongoose = require('mongoose');


const ExcavatorSchema = mongoose.Schema({
    Title:String,
    Price:Number,
    ImageUrl:String,
    Description:Object
})

const ExcavatorModel = mongoose.model('Excavator',ExcavatorSchema)

module.exports = {ExcavatorModel}