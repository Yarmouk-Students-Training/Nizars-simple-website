const express = require('express');
const controller = require('../controllers/userController.js');

const router = express.Router()

router.get('/user/new' , controller.get_registeration_page);

router.post('/user/create',controller.post_register_user);

router.get('/user/login',controller.get_login_page);

router.post('/user/login',controller.post_login_user);

router.get('/users',controller.get_all_users);

router.get('/user',controller.get_cuurentUser_profile_page);

router.get('/user/:username', controller.get_profile_page);

module.exports=router;

