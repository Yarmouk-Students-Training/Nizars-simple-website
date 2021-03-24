const express = require('express');

const router = express.Router()

router.get('/realtionship/2/:user_id', get_friends_specific_user);

router.get('/realtionship/2', get_friends_current_user);

router.get('/realtionship/1', get_pendingRequests_current_user);

router.get('/realtionship/3', get_blockedList_current_user);

router.post('/realtionship/param/:user_id', post_create_realationship);

