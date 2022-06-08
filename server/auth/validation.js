const { check } = require('express-validator');

exports.signUpValidation = [
    check('first_name', 'Name is required').not().isEmpty(),
    check('last_name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    check('password', 'Password must contain six or more characters').isLength({ min: 6 }),
    check('passwordConfirmation').custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('Password confirmation is incorrect');
        }
    })    
];

exports.loginValidation = [
    check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    check('password', 'Password must contain six or more characters').isLength({ min: 6 })
]