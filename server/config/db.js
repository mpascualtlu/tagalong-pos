const mysql = require('mysql');
const db = mysql.createConnection({
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '',
    DB: 'tagalong-pos'
});

