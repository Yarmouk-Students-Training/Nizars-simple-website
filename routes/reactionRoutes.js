const express = require('express');
const controller = require('../controllers/reactionController.js');
const Ucontroller = require('../controllers/userController.js');

const router = express.Router()

router.get('/reaction/new',Ucontroller.verify, controller.get_create_reaction);

router.post('/reaction/create',Ucontroller.verify, controller.post_create_reaction);

router.get('/reaction/:reactionid',  controller.get_specific_reaction);

router.delete('/reaction/:reactionid',Ucontroller.verify, controller.delete_specific_reaction);

router.put('/reaction/:reactionid',Ucontroller.verify, controller.edit_specific_reaction);

module.exports=router;