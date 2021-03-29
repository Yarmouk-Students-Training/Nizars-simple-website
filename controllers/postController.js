const {Post , Comment , Reaction}=require('../models/index');

const get_create_post_page = async(req, res) => {
    
}
  
const post_create_post = async(req, res) => {
  
  const {username ,content} = req.body;

  try{

    await Post.create({username, content});

    return res.json("Post created successfully");
  }
  catch(err){

    return res.status(500).json({err : "Something went wrog"});
  }

}
  
const get_specific_post = async(req, res) => {

  const post_uuid = req.params.post_uuid;

  try{

    const post = await Post.findOne({where:{post_uuid}});
    
    return res.json(post);
  }

  catch(err){

    console.log(err);

    return res.status(500).json({err : "Something went wrong"});
  }
}
  
const edit_specific_post = async(req, res) => {
  const post_uuid = req.params.post_uuid;

  const {content} = req.body;

  try{
    const post = await Post.findOne({where:{post_uuid}}); 
    post.content = content;

    return res.json(post);
  }

  catch(err){

    console.log(err);

    return res.status(500).json({err : "Something went wrong"});
  }

}
  
const delete_specific_post = async(req, res) => {

  const post_uuid = req.params.post_uuid;

  try{

    const post = await Post.findOne({where:{post_uuid}}); 

     await post.destroy();

    return res.json("Post has been deleted");
  }

  catch(err){

    console.log(err);

    return res.status(500).json({err : "Something went wrong"});
  }


}


const get_allComments_specific_post = async(req, res) => {

  const post_uuid = req.params.post_uuid;

  try{

    const post = await Post.findOne({where:{post_uuid}}); 
    const post_id = post.post_id;

    const allComments = await Comment.findAll({
      where :{post_id}
    });

    return res.json(allComments);
  }

  catch(err){

    console.log(err);
    return res.status(500).json({err : "Something went wrong"});
  }
}

const get_allReactions_specific_post = async(req, res) => {

  const post_uuid = req.params.post_uuid;

  try{

    const post = await Post.findOne({where:{post_uuid}}); 
    const post_id = post.post_id;

    const allReactions = await Reaction.findAll({
      where :{post_id}
    });

    return res.json(allReactions);
  }

  catch(err){

    console.log(err);
    return res.status(500).json({err : "Something went wrong"});
  }
}

const get_All_website_posts = async(req, res) => {
  try{
      const allPosts = await Post.findAll();

      return res.json(allPosts);
    } 

    catch (err) {
      console.log(err)
      return res.status(500).json({err : "Someting went wrong"});
    }

}
  
module.exports = {
      
  get_create_post_page, 
  post_create_post, 
  get_specific_post, 
  edit_specific_post, 
  delete_specific_post,
  get_allComments_specific_post,
  get_allReactions_specific_post,
  get_All_website_posts
} 