var express = require('express');
var router = express.Router();
var models = require('../models');

router.get("/", function(req, res, next) {
    models.reviews.findAll().then(reviews => res.json(reviews));
  });