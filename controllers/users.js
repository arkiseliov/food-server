var Users = require('../models/users');

exports.all = function (req,res) {
    Users.all(function (err,docs) {
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
};

exports.findById = function (req,res) {
    Users.findById(req.params.id,function (err,doc) {
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(doc);
    })
};

exports.create = function (req,res) {
    var user={
        name:req.body.name,
        rest:req.body.rest,
        friends:req.body.friends,
        events:req.body.events
    };
   Users.create(user,function (err,result) {
       if(err){
           console.log(err);
           res.sendStatus(500);
       }
       res.send(user);
   });
};

exports.update = function (req,res) {
    Users.update(req.params.id,{name:req.body.name},function (err,result) {
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
};

exports.delete = function (req,res) {
    Users.delete(req.params.id,function (err,result){
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
};