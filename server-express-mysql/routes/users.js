var express = require('express');
var router = express.Router();
var models = require('../models/users');
var passport = require('../services/passport');
var authService = require('../services/auth');

router.get('/users/signup', function(req, res, next) {
    res.render('/user/signup');
  });
  
  router.post('/users/signup', function(req, res, next) {
    models.users
      .findOrCreate({
        where: {
          Username: req.body.username,
          Email: req.body.email
        },
        defaults: {
          FirstName: req.body.firstName,
          LastName: req.body.lastName,
          Email: req.body.email,
          Password: authService.hashPassword(req.body.password)
        }
      })
      .spread(function(result, created) {
        if (created) {
          res.send('User successfully created');
        } else {
          res.send('This user already exists');
        }
      });
  });

  router.post('/login', passport.authenticate('local', { failureRedirect: '/users/login' }),
  function (req, res, next) { res.redirect('profile') });

  router.post('/login', function (req, res, next) {
    models.users.findOne({
      where: {
        Username: req.body.username
      }
    }).then(user => {
      if (!user) {
        console.log('User not found')
        return res.status(401).json({
          message: "Login Failed"
        });
      } else {
        let passwordMatch = authService.comparePassword(req.body.password, user.Password);
        if (passwordMatch) {
          let token = authService.signUser(user);
          res.cookie('jwt', token);
          res.send('Login successful');
        } else {
          console.log('Wrong password');
          res.send('Wrong password');
        }
      }
    });
  });

  router.get('/users/profile', function (req, res, next) {
    let token = req.cookies.jwt;
    if (token) {
      authService.verifyUser(token)
        .then(user => {
          if (user) {
            res.send(JSON.stringify(user));
          } else {
            res.status(401);
            res.send('Invalid authentication token');
          }
        });
    } else {
      res.status(401);
      res.send('Must be logged in');
    }
  });

 
  router.delete("/users/:id", function (req, res, next) {
    let usersId = parseInt(req.params.id);
    models.actor
      .destroy({
        where: { users_id: usersId }
      })
      .then(result => res.redirect('/users'))
      .catch(err => { 
        res.status(400); 
        res.send("There was a problem deleting the post. Please make sure you are specifying the correct id."); 
      }
  );
  });

 
    
    
    module.exports = router;