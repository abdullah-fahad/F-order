var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var menuItem = new Schema({
    title: {type: String, required:true},
    sizes: [{size:{type: String, required:true}, price:{type: String, required:true}}],
    ingredients: {type: String, required:true},
    nutInformation: {type: String, requierd:true}
})

module.exports = mongoose.model("MenuItem", menuItem);