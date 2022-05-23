const express = require('express');
const authRouter = express.Router();
const db = require('../dbConnection');
const { signUpValidation, loginValidation } = require('../auth/validation');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

authRouter.post('/register', signUpValidation, (req, res) => {
    db.query(`SELECT * FROM users WHERE LOWER(email) = LOWER(${db.escape(req.body.email)});`,
    (err, result) => {
        console.log(err);
        if (result.length) {
            return res.status(409).send({
                msg: 'This user is already in use!'
            });
        }
        else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {
                    return res.status(500).send({
                        msg: err
                    });
                } else {
                    db.query(
                        `INSERT INTO users (name, email, password) VALUES ('${req.body.name}', ${db.escape(req.body.email)}, ${db.escape(hash)});`,
                        (err, result) => {
                            if (err) {
                                return result.status(400).send({
                                    msg: err
                                });
                            }
                            return res.status(201).send({
                                msg: 'The user has been registered with us!'
                            });
                        }
                    );
                }
            });
        }
    })
})

authRouter.post('/login', loginValidation, (req, res, next) => {
    db.query(
        `SELECT * FROM users WHERE email = ${db.escape(req.body.email)};`,
        (err, result) => {
            if (err) {
                throw err;
                return res.status(400).send({
                    msg: err.msg
                })
            }
            if (!result.length) {
                return res.status(401).send({
                    msg: 'The email or password are incorrect!'
                });
            }
            
            bcrypt.compare(
                req.body.password,
                result[0]['password'],
                (bErr, bResult) => {
                    if (bErr) {
                        throw bErr;
                        return res.status(401).send({
                            msg: 'Email or password is incorrect!'
                        });
                    }
                    if (bResult) {
                        const token = jwt.sign({ id: result[0].id }, 'a-super-strong-secret', { expiresIn: '1h' });
                        db.query(`UPDATE users SET last_login = now() WHERE id = '${result[0].id}'`);
                        return res.status(200).send({
                            msg: 'Logged in!', 
                            token,
                            user: result[0]
                        });
                    }
                    return res.status(401).send({
                        msg: 'Username or password is incorrect!',
                    });
                }
            );
        }
    );
});

authRouter.post('/get-user', signUpValidation, (req, res, next) => {
    if (
        !req.headers.authorization ||
        !req.headers.authorization.startsWith('Bearer') ||
        !req.headers.authorization.split(' ')[1]
    ){
        return res.status(422).json({
            message: 'Please provide a token'
        });
    }
    const theToken = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(theToken, 'a-super-strong-secret');
    db.query('SELECT * FROM users where id = ?', decoded.id, function(error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results[0], message: 'Fetched successfully'})
    })
});

module.exports = authRouter;