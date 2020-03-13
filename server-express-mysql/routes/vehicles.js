var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function (req, res, next) {
    res.send('respond with a resource');
  });

  router.post("/", function (req, res, next) {
    console.log(req.body);
    let addCar = new models.mopars();
    addCar.MoparID = 0;
    addCar.year = req.body.year;
    addCar.make = req.body.make;
    addCar.model = req.body.model;
    addCar.mileage = req.body.mileage;
    addCar.vin = req.body.vin;
    addCar.color = req.body.color;
    addCar.doors = req.body.doors;
    addCar.price = req.body.price;
    addCar.save().then(car => res.json(car)).catch(err => console.log(err));
  });


module.exports = router;