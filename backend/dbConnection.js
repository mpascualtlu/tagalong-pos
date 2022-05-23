const mysql = require('mysql');
const dbConfig = require('./config/db.config');

var conn = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
}); 

conn.connect(function(error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log("Connected!")
  }
});

module.exports = conn;