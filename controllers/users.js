var express =  require("express");
var User = require('../models/user');
var Delivery = require('../models/delivery');
var Menu = require('../models/menu')

function RegisterUser(request, response){
    data = request.body;
    var NewUser = new User();
    NewUser.name = data.name;
    NewUser.username = data.username;
    NewUser.email = data.email;
    NewUser.password = data.password;
    NewUser.favorit = data.favorit;
    NewUser.save(function(err, result){
        if(err){response.status(500).send(err)}
        else{response.status(200).send(result)}
    })
}

function ShowFav(request, response){
    User.find({}, function(err, result){
        if(err) {response.status(500).send(err)}
        else{
            response.status(200).send(result.favorit)
        }
    })
}

function AddToFav(request, response){
    D = request.body;
    Menu.findOne({_id: D.menuId}, function(err, result){
        if(err) { response.status(500).send(err) }
        else{
            User.update({email: D.email, password: D.password}, {$addToSet:{favorit: result}},)
        }
    })
}

function RegisterDel(request, response){
    data = request.body;
    var NewDel = new Delivery();
    NewDel.name = data.name;
    NewDel.username = data.username;
    NewDel.email = data.email;
    NewDel.password = data.password;
    NewDel.save(function(err, result){
        if(err){response.status(500).send(err)}
        else{response.status(200).send(result)}
    })
}


module.exports = {RegisterUser, RegisterDel, ShowFav, AddToFav}