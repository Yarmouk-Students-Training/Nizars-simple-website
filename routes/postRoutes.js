const express = require('express');
const controller = require('../controllers/postController.js');
const {verifyAccessToken} = require('../tokens.js');
const router = express.Router()

router.get('/post/new',verifyAccessToken,controller.get_create_post_page);

router.post('/post/create',verifyAccessToken, controller.post_create_post);

router.get('/post/comments/:post_uuid' , controller.get_allComments_specific_post);

router.get('/post/reactions/:post_uuid' , controller.get_allReactions_specific_post);

router.get('/posts', controller.get_All_website_posts);

router.get('/post/:post_uuid', controller.get_specific_post);

router.put('/post/:post_uuid',verifyAccessToken, controller.edit_specific_post);

router.delete('/post/:post_uuid',verifyAccessToken, controller.delete_specific_post);

module.exports=router;