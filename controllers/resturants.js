var express = require('express');
var Resturant = require('../models/resturants');
var Menu = require('../models/menu');

function get_resturants(request, response){
    Resturant.find({}).populate({path:'menu', model: 'MenuItem'}).exec(function(err, result) {
        if (err) {
            response.status(500).send({error:err});
        } else {
            response.status(200).send(result);
        }
    })
}

function new_resturant(request, response){
    var rest = new Resturant();
    data = request.body;
    rest.name = data.name;
    rest.discraption = data.discraption;
    rest.addres = data.addres;
    rest.menu = data.menu;
    rest.username = data.username;
    rest.email = data.email;
    rest.password = data.password;
    rest.save(function(err, savedResturant){
        if(err){response.status(500).send(err)}
        else{response.status(200).send(savedResturant); 
             console.log("a new resturant declared" + savedResturant)}
    })
}

function resturant_create_menu(request, response){
    var data = request.body;
    var menu = new Menu();
    menu.title = data.title;
    menu.sizes = data.sizes;
    menu.ingredients = data.ingredients;
    menu.nutInformation = data.nutInformation;
    menu.save(function(err, saved){
        if(err){response.status(500).send(err)
        }
     Menu.findOne({_id: saved._id}, function(err, themenu){
        if(err){response.status(500).send(err)}
        else{
         Resturant.update({_id: data.resturantId}, {$addToSet:{menu: themenu}}, function(err, restu){
             if (err) {
               response.status(500).send({error:"Could not add item to menu"});
             } else {
               response.send("Successfully added to menu");
            }
         })
         
    }})})
}

module.exports = {Get: get_resturants, New: new_resturant, CreateMenu: resturant_create_menu}