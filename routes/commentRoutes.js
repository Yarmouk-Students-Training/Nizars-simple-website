const express = require('express');
const controller = require('../controllers/commentController.js');
const {verifyAccessToken} = require('../tokens.js');

const router = express.Router()

router.get('/comment/new',verifyAccessToken, controller.get_create_comment_page);

router.post('/comment/create',verifyAccessToken, controller.post_create_comment);

router.get('/comment/:comment_uuid',controller.get_specific_comment);

router.delete('/comment/:comment_uuid',verifyAccessToken, controller.delete_specific_comment);

router.put('/comment/:comment_uuid',verifyAccessToken, controller.edit_specific_comment);

module.exports=router;

