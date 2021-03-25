const express = require('express');
const controller = require('../controllers/commentController.js');

const router = express.Router()

router.get('/comment/new', controller.get_create_comment_page);

router.post('/comment/create', controller.post_create_comment);

router.get('/comment/:commentid', controller.get_specific_comment);

router.delete('/comment/:commentid',controller.delete_specific_comment);

router.put('/comment/:commentid', controller.edit_specific_comment);

module.exports=router;

