const createError = require("http-errors");
const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require("express-session");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const customersRouter = require("./routes/customers");

const app = express();
app.use(express.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/customers', customersRouter);

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  res.status(err.statusCode).json({
    message: err.message,
  });
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

module.exports = app;