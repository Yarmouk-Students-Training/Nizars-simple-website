
const { User }=require('../models/index');

const get_registeration_page = async(req, res) => {

  return res.json("Nothing");
    
}
  
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

//after login success:
try{
  
  

  return res.json("Successfully login");
}

catch(err){

  console.log(err);
  return res.status(500).json({err :"Something went wrong"});
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

  const {username} = req.body;

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
  
module.exports = {
      
  get_registeration_page, 
  post_register_user, 
  get_profile_page, 
  get_login_page, 
  post_login_user,
  get_all_users,
  get_cuurentUser_profile_page
} 