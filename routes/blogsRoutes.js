const express = require('express');
const controller = require('../controllers/blogController');

const router = express.Router();

router.get('/blogs/create',controller.blog_create_get);
    
router.get('/blogs', controller.blog_index);
 
router.post('/blogs', controller.blog_create_post);

router.get('/blogs/:id', controller.blog_details);
  
router.delete('/blogs/:id', controller.blog_delete);

module.exports=router;