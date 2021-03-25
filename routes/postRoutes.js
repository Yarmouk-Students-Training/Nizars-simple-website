const express = require('express');
const controller = require('../controllers/postController.js');

const router = express.Router()

router.get('/post/new', controller.get_create_post_page);

router.post('/post/create', controller.post_create_post);

router.get('/post/:post_id', controller.get_specific_post);

router.put('/post/:post_id', controller.edit_specific_post);

router.delete('/post/:post_id', controller.delete_specific_post);

router.get('/post/user/:username', controller.get_specific_user_allPosts);

router.get('/post/comments/:post_id' , controller.get_allComments_specific_post);

router.get('/posts', controller.get_All_website_posts);

module.exports=router;