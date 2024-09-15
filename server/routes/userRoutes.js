const express = require('express');
const authController = require('../controllers/userController');
const router = express.Router();

// POST route for sign-in
router.post('/signin', userController.signIn);

module.exports = router;
