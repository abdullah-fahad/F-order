var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Types.ObjectId;

var user = new Schema({
    name: {type:String, required:true, unique:false},
    username: {type:String, required:true, unique:true},
    email: {type:String, required:true, unique:true},
    password: {type:String, required:true, unique:false},
    favorit: [{type: ObjectId, ref:"MenuItem"}]
})

module.exports = mongoose.model('User', user);