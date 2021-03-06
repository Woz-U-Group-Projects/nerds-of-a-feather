var express = require('express');
var router = express.Router();
var models = require('../models');

router.get("/", function(req, res, next) {
    models.reviews.findAll().then(reviews => res.json(reviews));
  });
  // router.get('/', function(req, res, next) {
  //   models.reviews
  //     .findAll({
  //         attributes: ['body', 'rating', 'mopar_id'],
  //     include: [{ 
  //         idreviews: body.rating.mopar_id,
  //    }]})
  //     .then(reviewsFound => {
  //       res.setHeader('Content-Type', 'application/json');
  //       res.send(JSON.stringify(reviewsFound));
  //     });
  // });
  router.get('/:id', function(req, res, next) {
    models.reviews
      .findOne({
        where: {idreviews: parseInt(req.params.id)}
      })
      .then(reviewsFound => {
        console.log(reviewsFound);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(reviewsFound));
      })
  });
  router.post('/', function (req, res, next) {
    models.reviews.create(req.body)
      .then(newReviews => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(newReviews));
      })
      .catch(err => {
        res.status(400);
        res.send(err.message);
      });
  });
  // router.get('/reviews/:id', function(req, res, next) {
  //   models.reviews
  //     .findOne({ 
  //       include: [{ model: models.mopar }], 
  //       where: { reviews_id: parseInt(req.params.id) }
  //     })
  //     .then(reviewsFound => {
  //       res.setHeader('Content-Type', 'application/json');
  //       res.send(JSON.stringify(reviewsFound));
  //     })
  // });






  module.exports = router;