const express = require('express');
const controller = require('../controllers/postController.js');

const router = express.Router()

router.get('/post/new', controller.get_create_post_page);

router.post('/post/create', controller.post_create_post);

router.get('/post/:postid', controller.get_specific_post);

router.put('/post/:postid', controller.edit_specific_post);

router.delete('/post/:postid', controller.delete_specific_post);

router.get('/post/user/:userid', controller.get_specific_user_allPosts);

router.get('/post/comments/:postid' , controller.get_allComments_specific_post);

router.get('/posts', controller.get_All_website_posts);