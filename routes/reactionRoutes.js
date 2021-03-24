const express = require('express');
const controller = require('../controllers/reactionController.js');

const router = express.Router()

router.get('/reaction/new', controller.get_create_reaction);

router.post('/reaction/create', controller.post_create_reaction);

router.get('/reaction/:reactionid',  controller.get_specific_reaction);

router.delete('/reaction/:reactionid', controller.delete_specific_reaction);

router.put('/reaction/:reactionid', controller.edit_specific_reaction);s