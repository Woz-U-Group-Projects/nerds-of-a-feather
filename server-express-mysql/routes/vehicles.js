var express = require('express');
var router = express.Router();
var models = require('../models');



  router.post("/create", function (req, res, next) {
    let addCar = new models.mopars();
    addCar.Year = req.body.year;
    addCar.Make = req.body.make;
    addCar.MODEL = req.body.model;
    addCar.MILEAGE = req.body.mileage;
    addCar.VIN = req.body.vin;
    addCar.COLOR = req.body.color;
    addCar.DOORS = req.body.doors;
    addCar.PRICE = req.body.price;
    addCar.save();
    res.send('worked');
  });


module.exports = router;