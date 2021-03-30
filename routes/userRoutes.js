const express = require('express');
const controller = require('../controllers/userController.js');
const {verifyAccessToken} = require('../tokens.js');

const router = express.Router()

router.get('/user/new' , controller.get_registeration_page);

router.post('/user/create',controller.post_register_user);

router.get('/user/login',controller.get_login_page);

//router.get('/user/logout',controller.get_logout_page);

router.get('/user/logout',verifyAccessToken,controller.post_logout_user);

router.post('/user/login',controller.post_login_user);

router.get('/user/logout',verifyAccessToken,controller.post_logout_user);

router.get('/users',controller.get_all_users);

router.get('/user',verifyAccessToken,controller.get_cuurentUser_profile_page);

router.get('/user/posts/:username', controller.get_specific_user_allPosts);

router.get('/user/posts',verifyAccessToken, controller.get_current_user_allPosts);

router.get('/user/:username', controller.get_profile_page);

module.exports=router;

