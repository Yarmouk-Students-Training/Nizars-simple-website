const express = require('express');
const controller = require('../controllers/commentController.js');
const Ucontroller = require('../controllers/userController.js');

const router = express.Router()

router.get('/comment/new',Ucontroller.verify, controller.get_create_comment_page);

router.post('/comment/create',Ucontroller.verify, controller.post_create_comment);

router.get('/comment/:comment_uuid',controller.get_specific_comment);

router.delete('/comment/:comment_uuid',Ucontroller.verify, controller.delete_specific_comment);

router.put('/comment/:comment_uuid',Ucontroller.verify, controller.edit_specific_comment);

module.exports=router;

