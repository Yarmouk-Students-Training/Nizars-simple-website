const express = require('express');
const controller = require('../controllers/relationshipController.js');
const Ucontroller = require('../controllers/userController.js');

const router = express.Router()

router.get('/relationship/friends',Ucontroller.verify, controller.get_friends_current_user);

router.get('/relationship/pending',Ucontroller.verify, controller.get_pendingRequests_current_user);

router.get('/relationship/blocked',Ucontroller.verify, controller.get_blockedList_current_user);

router.post('/relationship/:action_receiver/:status',Ucontroller.verify, controller.post_create_realationship);

router.get('/relationship/friends/:username',controller. get_friends_specific_user);

module.exports=router;