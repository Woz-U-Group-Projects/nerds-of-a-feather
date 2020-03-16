var express = require('express');
var app = express();
var createError = require('http-errors'); 
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var models = require("./models");
var cors = require("cors");
var passport = require('passport');
var tasksRouter = require("./routes/tasks");
var vehiclesRouter = require("./routes/vehicles");
var usersRouter = require("./routes/users");
var reviewsRouter = require("./routes/reviews");
var session = require('express-session');


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept");
  next();
});

app.use(session({ secret: 'perilous journey' }));
app.use(passport.initialize());  
app.use(passport.session());

app.use("/tasks", tasksRouter);
app.use("/cars", vehiclesRouter);
app.use("/users", usersRouter);
app.use("/reviews", reviewsRouter);

models.sequelize.sync().then(function() {
  console.log("DB Sync'd up");
});

module.exports = app;
