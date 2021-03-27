const {Reaction , Post}=require('../models/index');

const get_create_reaction = async(req, res) => {
    
}
  
const post_create_reaction = async(req, res) => {

  const {post_uuid , content ,username} = req.body;

  try {

    const post = await Post.findOne({where:{post_uuid}}); 
    const post_id = post.post_id;

    //console.log(post_id, username);

   const reaction= await Reaction.create({post_id , username , content});

    return res.json(reaction);

  }catch(err){

    console.log(err);
    return res.status(500).json({err : "Something went wrog"});
  }

}
  
const get_specific_reaction = async(req, res) => {

  const {reaction_uuid} = req.body;

  try {

    const reaction = await Reaction.findOne({where:{reaction_uuid}}); 

    return res.json(reaction);

  }catch(err){

    console.log(err);
    return res.status(500).json({err : "Something went wrog"});
  }

}
  
const delete_specific_reaction = async(req, res) => {

  const {reaction_uuid} = req.body;

  try {

    const reaction = await Reaction.findOne({where:{reaction_uuid}}); 

    reaction.destroy();

    return res.json("Reaction deleted successfully");

  }catch(err){

    console.log(err);
    return res.status(500).json({err : "Something went wrog"});
  }


}
  
const edit_specific_reaction = async(req, res) => {

  const {reaction_uuid , content} = req.body;

  try {

    const reaction = await Reaction.findOne({where:{reaction_uuid} });

    reaction.content=content;

    return res.json(reaction);

  }catch(err){

    console.log(err);
    return res.status(500).json({err : "Something went wrog"});
  }

}
  
module.exports = {
      
  get_create_reaction, 
  post_create_reaction, 
  get_specific_reaction, 
  delete_specific_reaction, 
  edit_specific_reaction
} 