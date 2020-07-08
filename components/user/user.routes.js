const controller = require('./user.controller');
const express = require('express');
const router = express.Router();
const { signupValidation, signInValidation } = require('./Request/validations')

router.get('', controller.allUsers);
router.post('/register', signupValidation, controller.register);
router.post('/login', signInValidation, controller.login)

module.exports = router;
