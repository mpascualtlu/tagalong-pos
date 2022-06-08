const mysql = require('mysql2');

const connection = mysql.createConnection({
  connectionLimit: 10,
  host: '127.0.0.1',
  user: 'miguel',
  password: 'my_password',
  database: 'tagalong-pos'
}); 

connection.connect((error) => {
  if(error){
    console.log("Error connecting to db: ", error);
    return;
  }
  console.log('Connected!:)');
});

module.exports = connection; 