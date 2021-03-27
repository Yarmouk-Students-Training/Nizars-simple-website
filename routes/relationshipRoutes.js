const express = require('express');
const controller = require('../controllers/relationshipController.js');

const router = express.Router()

router.get('/relationship/friends', controller.get_friends_current_user);

router.get('/relationship/pending', controller.get_pendingRequests_current_user);

router.get('/relationship/blocked', controller.get_blockedList_current_user);

router.post('/relationship/:action_receiver/:status', controller.post_create_realationship);

router.get('/relationship/friends/:username',controller. get_friends_specific_user);

module.exports=router;