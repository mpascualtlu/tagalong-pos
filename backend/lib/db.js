const mysql = require('mysql');
const dbConfig = require('../config/db.config');

const connection = mysql.createPool({
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
}); 

connection.getConnection(function(error) {
  if (!!error) {
    console.log("Database error: ", error);
  } else {
    console.log("Connected!")
  }
});

module.exports = connection;