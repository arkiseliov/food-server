var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectID=require('mongodb').ObjectID;

var app = express();
var db = require('./db');
// var exhibitionsController=require('./controllers/exhibitions');
var eventsController = require('./controllers/events');
var restaurantsController = require('./controllers/restaurants');
var usersController = require('./controllers/users');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.all(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var events = [];
var restaurants = [];
var users = [];

app.get('/',function(req,res){
    res.send('Hello API');
});

//gets id
app.get('/events/:id',eventsController.findById);
app.get('/restaurants/:id',restaurantsController.findById);
app.get('/users/:id',usersController.findById);


// gets full db
app.get('/events',eventsController.all);
app.get('/restaurants',restaurantsController.all);
app.get('/users',usersController.all);

//posts info to db
app.post('/events',eventsController.create);
app.post('/restaurants',restaurantsController.create);
app.post('/users',usersController.create);

//updates info in id's
app.put('/events/:id',eventsController.update);
app.put('/restaurants/:id',restaurantsController.update);
app.put('/users/:id',usersController.update);


//removing current info by id
app.delete('/events/:id',eventsController.delete);
app.delete('/restaurants/:id',restaurantsController.delete);
app.delete('/users/:id',usersController.delete);


db.connect('mongodb://Admin:a12345@ds121251.mlab.com:21251/food-card',function (err) {
    if (err) {
        return console.log(err);
    }
    app.listen(process.env.PORT || 5000);
});