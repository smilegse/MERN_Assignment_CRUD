const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    foods_name: {type:String, require: true},
    food_code: {type:String, require: true},
    foods_image: {type:String, require: true},
    food_category : {type:String, require: true},
    qty: {type: Number, required: true},
    price: {type: Number, required: true}

}, {timestamps:true, versionKey: false})

const FoodModel = mongoose.model('foods', DataSchema)
module.exports = FoodModel;

