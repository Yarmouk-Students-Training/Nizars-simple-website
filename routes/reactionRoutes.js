const express = require('express');
const controller = require('../controllers/reactionController.js');
const {verifyAccessToken} = require('../tokens.js');

const router = express.Router()

router.get('/reaction/new',verifyAccessToken, controller.get_create_reaction);

router.post('/reaction/create',verifyAccessToken, controller.post_create_reaction);

router.get('/reaction/:reactionid',  controller.get_specific_reaction);

router.delete('/reaction/:reactionid',verifyAccessToken, controller.delete_specific_reaction);

router.put('/reaction/:reactionid',verifyAccessToken, controller.edit_specific_reaction);

module.exports=router;