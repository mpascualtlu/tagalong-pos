var express = require('express');
var router = express.Router();
const connection = require('../lib/db');
const { signupValidation, loginValidation } = require('../auth/validation');
const dbConfig = require('../config/db.config');
const bcrypt = require('bcryptjs');
const { check } = require('express-validator');
const jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Tag Along' });
});

router.get('/sign-in', (req, res, next) => {
  res.render('sign-in');
});

router.post('/sign-in', [
  check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
  check('password', 'Password must contain six or more characters').isLength({ min: 6 })
], (req, res, next) => {
  db.query(
    `SELECT * FROM users WHERE email = ${db.escape(req.body.email)};`,
      (err, result) => {
      // user does not exists
      if (err) {
        return res.status(400).send({
          msg: err
        });
      }
      if (!result.length) {
        return res.status(401).send({
          msg: 'Email or password is incorrect!'
        });
      }
    // check password
      bcrypt.compare(
        req.body.password,
        result[0]['password'],
        (bErr, bResult) => {
        // wrong password
        if (bErr) {
          throw bErr;
          return res.status(401).send({
            msg: 'Email or password is incorrect!'
          });
        }
        if (bResult) {
          const token = jwt.sign({id:result[0].id},'the-super-strong-secrect',{ expiresIn: '1h' });
          db.query(
          `UPDATE users SET last_login = now() WHERE id = '${result[0].id}'`
          );
          return res.status(200).send({
            msg: 'Logged in!',
            token,
            user: result[0]
          });
        }
      return res.status(401).send({
        msg: 'Username or password is incorrect!'
      });
    });
  });
})

router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/register', [
  check('first_name', 'Name is required').not().isEmpty(),
  check('last_name', 'Name is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
  check('password', 'Password must contain six or more characters').isLength({ min: 6 }),
  check('passwordConfirmation').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Password confirmation is incorrect');
    }
  })    
], (req, res) => {
  connection.query(`SELECT * FROM users WHERE LOWER(email) = ${connection.escape(req.body.email)};`, (err, result) => {
    if (result.length) {
      return res.status(409).send({
        msg: 'This user is already in use!'
      });
    } else {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          return res.status(500).send({
            msg: err
          })
        } else {
          connection.query(`INSERT INTO users (first_name, last_name, email, password) 
            VALUES ('${req.body.last_name}', '${req.body.last_name},
            ${connection.escape(req.body.email)}, ${connection.escape(hash)})`,
          (err, result => {
            if (err) {
              return res.status(400).send({
                msg: err
              });
            }
            return res.status(201).send({
              msg: 'We have registered this user!'
            });
          }))
        }
      })
    }
  })
})

router.post('/get-user', signupValidation, (req, res, next) => {
  if(
    !req.headers.authorization ||
    !req.headers.authorization.startsWith('Bearer') ||
    !req.headers.authorization.split(' ')[1]
  ){
    return res.status(422).json({
      message: "Please provide the token",
    });
  }
  const theToken = req.headers.authorization.split(' ')[1];
  const decoded = jwt.verify(theToken, 'the-super-strong-secrect');
  db.query('SELECT * FROM users where id=?', decoded.id, function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results[0], message: 'Fetch Successfully.' });
  });
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  req.flash('success', 'Login Again Here');
  res.redirect('/login');
});

module.exports = router;
