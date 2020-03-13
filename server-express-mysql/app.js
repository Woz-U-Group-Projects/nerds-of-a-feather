var createError = require('http-errors'); 
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var models = require("./models");
var cors = require("cors");
var mopars = require('./models/mopars');
var indexRouter = require('./routes/index');





var tasksRouter = require("./routes/tasks");
var carRouter = require('./routes/vehicles');




var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());




app.use("/tasks", tasksRouter);
app.use('/index', indexRouter);
app.use('/cars', carRouter);

models.sequelize.sync().then(function() {
  console.log("DB Sync'd up");
});

module.exports = app;
