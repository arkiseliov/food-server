var Events = require('../models/events');

exports.all = function (req,res) {
    Events.all(function (err,docs) {
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
};

exports.findById = function (req,res) {
    Events.findById(req.params.id,function (err,doc) {
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(doc);
    })
};

exports.create = function (req,res) {
    var event={
        name:req.body.name,
        description:req.body.description,
        image:req.body.image,
        date:req.body.date,
        price:req.body.price
    };
   Events.create(event,function (err,result) {
       if(err){
           console.log(err);
           res.sendStatus(500);
       }
       res.send(event);
   });
};

exports.update = function (req,res) {
    Events.update(req.params.id,{name:req.body.name},function (err,result) {
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
};

exports.delete = function (req,res) {
    Events.delete(req.params.id,function (err,result){
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
}