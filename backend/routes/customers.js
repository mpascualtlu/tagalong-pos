const express = require('express');
const router = express.Router();
const connection = require('../dbConnection');

router.get('/', function(req, res, next) {
    connection.query('SELECT * FROM Customers ORDER BY id desc', function(err, rows) {
        if (err) {
            req.flash('error', err);
            res.render('customers', { page_title: "Customers - Node.js", data: ''});
        }
        else {
            res.render('customers',{page_title:"Customers - Node.js",data:rows})
        }
    })
})

router.get('/add', function(req, res, next) {
    res.render('customers/add', {
        title: 'Add New Customers',
        name: '',
        email: ''
    })
})

router.post('/add', function(req, res, next) {
    req.assert('name', 'Name is required').notEmpty();
    req.assert('email', 'A valid email is required').isEmail();
    const errors = req.validationErrors();
    if (!errors) {
        const user = {
            name: req.sanitize('name').escape().trim(),
            email: req.sanitize('email').escape().trim()
        }

        connection.query('INSERT INTO customers SET ?', user, function(err, result) {
            if (err) {
                req.flash('error', err);
                res.render('/customers/add', {
                    title: 'Add new customer',
                    name: user.name,
                    email: user.email
                })
            } else {
                
            }
        })
    }
})