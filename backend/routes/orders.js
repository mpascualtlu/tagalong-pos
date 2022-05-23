const express = require('express');
const router = express.Router();
const db = require('../dbConnection');

// router.post('/user', (req, res) => {
//     db.query(`INSERT INTO Cafe_orders 
//         (customer_id, email, password) 
//         VALUES ('${req.body.name}', ${db.escape(req.body.email)}, ${db.escape(hash)});`,
//     (err, result) => {
        
//     })
// })