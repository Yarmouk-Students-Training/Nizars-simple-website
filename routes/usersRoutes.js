const express = require('express');
const controller = require('../controllers/userController.js');

const router = express.Router();

router.post('/register', controller.user_register_post);

router.get('/register', controller.user_register_get);

module.exports = router;