var express = require('express');
var router = express.Router();
var mysql = require('mysql2');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Password1!',
  database: 'database'
});

connection.connect(function(err) {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('Yay! You are connected to the database!');
})

/* GET home page. */
router.get('/mopars', function(req, res, next) {
  models.mopars.findAll({}).then(moparsFound => {
    res.render('/mopars', {
      mopars: moparsFound
    });
  });
});

router.post('/mopars', (req, res) => {
  models.mopars
  .findOrCreate({
    where: {
      vin: req.body.vin
    }
  })
  .spread(function(result, created) {
    if (created) {
      res.send('The vehicle has been submitted.')
      res.redirect('/mopars')
    } else {
      res.send('This vehicle exist within the system.')
    }
  });;
})

module.exports = router;
