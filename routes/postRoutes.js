const express = require('express');
const controller = require('../controllers/postController.js');
const Ucontroller = require('../controllers/userController.js');

const router = express.Router()

router.get('/post/new',Ucontroller.verify,controller.get_create_post_page);

router.post('/post/create',Ucontroller.verify, controller.post_create_post);

router.get('/post/comments/:post_uuid' , controller.get_allComments_specific_post);

router.get('/post/reactions/:post_uuid' , controller.get_allReactions_specific_post);

router.get('/posts', controller.get_All_website_posts);

router.get('/post/:post_uuid', controller.get_specific_post);

router.put('/post/:post_uuid',Ucontroller.verify, controller.edit_specific_post);

router.delete('/post/:post_uuid',Ucontroller.verify, controller.delete_specific_post);

module.exports=router;