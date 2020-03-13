var express = require('express');
var router = express.Router();
var models = require('../models');
var passport = require('../services/passport');
var authService = require('../services/auth');
var mopars = require('../models/mopars');
const mysql = require('mysql2');


router.post('/create', function(req,res,next) {
  let addUser = new models.users();
  addUser.FirstName = req.body.firstName;
  addUser.LastName = req.body.lastName;
  addUser.UserName = req.body.userName;
  addUser.Password = req.body.password;
  addUser.Email = req.body.email;
  addUser.save();
  res.send('Worked')
});
  
    
    
    module.exports = router;