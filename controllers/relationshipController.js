const {Relationship,Post}=require('../models/index');

const get_friends_specific_user = async(req, res) => {
    const username = req.params.username;


    try{

      const q1 = await Relationship.findAll({
        where : {actionMaker : username , status : 1},

        attributes: ['actionReceiver']
      });

      const q2 = await Relationship.findAll({
        where : {actionReceiver : username},

        attributes: ['actionMaker']
      });

      const friendlist = q1.concat(q2);

      return res.json(friendlist);

    }

    catch(err){

      console.log(err);
      return res.status(500).json({err : "Something went wrong"});
    }
}
  
const get_friends_current_user = async(req, res) => {

  try{

  }

  catch(err){

    console.log(err);
    return res.status(500).json({err : "Something went wrong"});
  }

}
  
const get_pendingRequests_current_user = async(req, res) => {

  try{

  }

  catch(err){

    console.log(err);
    return res.status(500).json({err : "Something went wrong"});
  }

}

const get_blockedList_current_user = async(req, res) => {

  try{

  }

  catch(err){

    console.log(err);
    return res.status(500).json({err : "Something went wrong"});
  }

}

const post_create_realationship = async(req, res) => {
 
  let { actionMaker ,actionReceiver,status }  = req.body;

console.log(status*5);

  try{

    await Relationship.create({actionMaker , actionReceiver , status});

   

    return res.json("Rrelationship created");

  }

  catch(err){

    console.log(err);
    return res.status(500).json({err : "Something went wrong"});
  }

}
  
module.exports = {
      
  get_friends_specific_user, 
  get_friends_current_user, 
  get_pendingRequests_current_user, 
  get_blockedList_current_user, 
  post_create_realationship
} 