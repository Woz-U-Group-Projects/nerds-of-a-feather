var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/cars', function(req, res, next) {
    res.render('Enter in your vehicle information.')
});

router.post('/cars', function(req, res, next) {
    models.users
    .findOrCreate({
        where: {
            vin: req.body.vin
        },
        defaults: {
            Year: req.body.year,
            Make: req.body.make,
            Model: req.body.model,
            Mileage: req.body.mileage,
        }
    })
    .spread(function(result, created) {
        if(created) {
            res.send('Vehicle has been successfully submitted');
        } else {
            res.send('This vehicle has already been entered into the system.')
        }
    });
});