const {Comment , Post}=require('../models/index');

const get_create_comment_page = async(req, res) => {
    
  return res.json("Nothing")
}
  
const post_create_comment =async (req, res) => {

  const {post_uuid , content} = req.body;

  try {

    const post = await Post.findOne({where:{post_uuid}}); 
    const post_id = post.post_id;
    const username = post.username;

    console.log(post_id, username);

   const comment= await Comment.create({post_id , username , content});

    return res.json(comment);

  }catch(err){

    console.log(err);
    return res.status(500).json({err : "Something went wrog"});
  }


}
  
const get_specific_comment = async(req, res) => {

  const comment_uuid = req.params.comment_uuid;

  try {

    const comment = await Comment.findOne({where:{comment_uuid}}); 

    return res.json(comment);

  }catch(err){

    console.log(err);
    return res.status(500).json({err : "Something went wrog"});
  }

}
  
const delete_specific_comment = async(req, res) => {

  const comment_uuid = req.params.comment_uuid;

  try {

    const comment = await Comment.findOne({where:{comment_uuid}}); 

    comment.destroy();

    return res.json("Comment deleted successfully");

  }catch(err){

    console.log(err);
    return res.status(500).json({err : "Something went wrog"});
  }


}
  
const edit_specific_comment = async(req, res) => {
  const {comment_uuid , content} = req.body;

  try {

    const comment = await Comment.findOne({where:{comment_uuid} });

    comment.content=content;

    return res.json(comment);

  }catch(err){

    console.log(err);
    return res.status(500).json({err : "Something went wrog"});
  }


}
  
module.exports = {
      
  get_create_comment_page, 
  post_create_comment, 
  get_specific_comment, 
  delete_specific_comment, 
  edit_specific_comment,
} 