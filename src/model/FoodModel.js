const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    food_name: {type:String, require: true},
    food_code: {type:String, require: true},
    food_image: {type:String, require: true},
    food_category : {type:String, require: true},
    qty: {type: Number, required: true},
    price: {type: Number, required: true}

}, {timestamps:true, versionKey: false})

const FoodModel = mongoose.model('foods', DataSchema)
module.exports = FoodModel;

