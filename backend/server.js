const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { body, validationResult } = require("express-validator");
const flash = require("express-flash");
const session = require("express-session");
const bodyParser = require("body-parser");

const mysql = require("mysql");
const connection = require("./lib/db");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const customersRouter = require("./routes/customers");

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: '123456cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 6000 }
}));

app.use(flash());
// app.use(expressValidator());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/customers', customersRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500);
  res.render('error');
})

app.listen(3000, function() {
  console.log("Node app is running on port 3000");
});

module.exports = app;