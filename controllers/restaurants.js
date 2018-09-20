var Restaurants = require('../models/restaurants');

exports.all = function (req,res) {
    Restaurants.all(function (err,docs) {
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
};

exports.findById = function (req,res) {
    Restaurants.findById(req.params.id,function (err,doc) {
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(doc);
    })
};

exports.create = function (req,res) {
    var restaurant={
        name:req.body.name,
        rating:req.body.rating,
        location:req.body.location,
        events:req.body.events
    };
   Restaurants.create(restaurant,function (err,result) {
       if(err){
           console.log(err);
           res.sendStatus(500);
       }
       res.send(restaurant);
   });
};

exports.update = function (req,res) {
    Restaurants.update(req.params.id,{name:req.body.name},function (err,result) {
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
};

exports.delete = function (req,res) {
    Restaurants.delete(req.params.id,function (err,result){
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
};