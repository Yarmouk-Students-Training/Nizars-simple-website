const { Op } = require("sequelize");
const { User  , Post}=require('../models/index');
const jwt = require('jsonwebtoken');

const accessTokenSecret = "SDASdasdas;dl0sd302dj023dj02303ed230320&$";

const get_registeration_page = async(req, res) => {

  return res.json("Nothing");
    
}

const verify = async(req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (authHeader) {
      const token = authHeader;//authHeader.split(' ')[1];  
      jwt.verify(token, accessTokenSecret, (err, user) => {
        
          if (err) {
              return res.sendStatus(403);
          }
          req.user = user;
          next();
      });
  } else {
      return res.sendStatus(401);
  }
};

 const post_register_user = async (req, res) => {

  let { username , first_name , last_name, email, password_hash , gender ,country ,DOB} = req.body;
  DOB = new Date(DOB);
  
//console.log( DOB);
    try {

      await User.create({ username , first_name , last_name, email, password_hash , gender ,country ,DOB });

      return res.json("User registered");
    } 

    catch (err) {

      console.log(err)
      return res.status(500).json({err : "Someting went wrong"});
    }

}
  
const get_profile_page = async (req, res) => {

  const username = req.params.username;

  try{

    const user= await User.findOne({
      where :{username},
      attributes :{exclude :['password_hash' , 'updatedAt' , 'createdAt']}
      } );
    
    if(user != null)
      return res.json(user);
    else
      return res.json("Not valid username");
  }
  catch(err){

    console.log(err);
    return res.status(500).json(err);
}
  
}
  
const get_login_page = async(req, res) => {
  return res.json("Nothing");
}
  
const post_login_user = async(req, res) => {

  const { username, password_hash } = req.body;

    
    const user = await User.findOne({where : {[Op.and]:[{username }, {password_hash}]}});

    if (user) {
        
        const accessToken = jwt.sign(username, accessTokenSecret);

        res.json({
            accessToken
        });
    } else {
        res.send('Username or password incorrect');
    }
}

const get_all_users = async (req , res) =>{

  try{
  
    console.log("DSD")
    const allUsers = await User.findAll();
  
    return res.json(allUsers);
  }
  
  catch(err){

    console.log(err);
    return res.status(500).json({err :"Something went wrong"});
  }
}

const get_cuurentUser_profile_page = async (req , res) =>{

  const username = req.user;

  try{

  const user= await User.findOne({
      where :{username},
      attributes :{exclude :['password_hash' , 'updatedAt' , 'createdAt']}
      } );
    
    if(user != null)
      return res.json(user);
    else
      return res.json("Not valid username");
  }

  catch(err){

    console.log(err);
    return res.status(500).json(err);
}
}

const get_specific_user_allPosts = async(req, res) => {
  
  const username = req.params.username;

  try{

    const allPosts = await Post.findAll({
      where :{username}
    });
    
    return res.json(allPosts);
  }

  catch(err){

    console.log(err);
    return res.status(500).json({err : "Something went wrong"});
  }

}

const get_current_user_allPosts = async(req, res) => {
  
  const username = req.user;

  try{

    const allPosts = await Post.findAll({
      where :{username}
    });
    
    return res.json(allPosts);
  }

  catch(err){

    console.log(err);
    return res.status(500).json({err : "Something went wrong"});
  }

}
  
module.exports = {
      
  get_registeration_page, 
  post_register_user, 
  get_profile_page, 
  get_login_page, 
  post_login_user,
  get_all_users,
  get_cuurentUser_profile_page,
  get_specific_user_allPosts,
  get_current_user_allPosts,
  verify
} 