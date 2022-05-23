const express = require('express');
const router = express.Router();
const conn = require('../lib/db');

router.get('/', function(req, res, next) {
    conn.query('SELECT * FROM Customers ORDER BY id desc', function(err, rows) {
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
                req.flash('success', 'Data added successfully!');
                res.redirect('/customers');
            }
        })
    }
    else {
        let error_msg = '';
        errors.forEach(function(error) {
            error_msg += error.msg + '<br>'
        })
        req.flash('error', error_msg);

        res.render('customers/add', {
            title: 'Add new customer',
            name: req.body.name,
            email: req.body.email
        })
    }
})

router.get('/edit/(:id)', function(req, res, next) {
    conn.query('SELECT * FROM Customers WHERE id = ' + req.params.id, function(err, rows, fields) {
        if (err) throw err;
        if (rows.length <= 0) {
            req.flash('error', 'Customers not found with id = ' + req.params.id);
            res.redirect('/customers');
        }
        else {
            res.render('customers/edit', {
                title: 'Edit Customers',
                id: rows[0].id,
                name: rows[0].name,
                email: rows[0].email
            })
        }
    })
})

router.post('/update/(:id)', function(req, res, next) {
    req.assert('name', 'Name is required').notEmpty();
    req.assert('email', 'A valid email is required').isEmail();
    const errors = req.validationErrors();
    if (!errors) {
        const user = {
            name: req.sanitize('name').escape().trim(),
            email: req.sanitize('email').escape().trim()
        }
        conn.query('UPDATE customers SET ? WHERE id = ' + req.params.id, user, function(err, result) {
            if (err) {
                req.flash('error', err);
                res.render('customers/edit', {
                    title: 'Edit Customer',
                    id: req.params.id,
                    name: req.body.name,
                    email: req.body.email
                })
            } else {
                req.flash('success', 'Data updated successfully!');
                res.redirect('/customers');
            }
        })
    } else {
        let error_msg = '';
        errors.forEach(function(error) {
            error_msg += error.msg + '<br>'
        })
        req.flash('error', error_msg);

        res.render('customers/edit', {
            title: 'Edit Customer',
            name: req.body.name,
            email: req.body.email
        })
    }
})

router.get('/delete/(:id)', function(req, res, next) {
    const user = { id: req.params.id }
    connection.query('DELETE FROM Customers WHERE id = ' + req.params.id, user, function(err, result) {
        if (err) {
            req.flash('error', err);
            res.redirect('/customers');
        } else {
            req.flash('success', 'Customer deleted successfully! id = ' + req.params.id);
            res.redirect('/customers');
        }
    })
});

module.exports = router;