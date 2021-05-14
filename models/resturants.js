var mongoose = require("mongoose");
var Schema = mongoose.Schema; 
var ObjectId = mongoose.Schema.Types.ObjectId;
var resturant = new Schema({
    name: {type: String, required: true},
    discraption: {type: String},
    menu: [{type: ObjectId, ref:"MenuItem"}],
    addres: {type: String, required: true},
    username: {type: String, unique: true, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true}
})

module.exports = mongoose.model("Resturant", resturant)
//done