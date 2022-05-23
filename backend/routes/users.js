var express = require('express');
var router = express.Router();

router.get('/add-user', (req, res, next) => {
  res.render('users/add-user');
})

module.exports = router;
