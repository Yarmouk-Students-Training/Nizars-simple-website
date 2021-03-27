const {Relationship}=require('../models/index');

const get_friends_specific_user = async(req, res) => {
    const username = req.params.username;


    try{

      const q1 = await Relationship.findAll({
        where : {action_maker : username , status : 2},

        attributes: ['action_receiver']
      });

      const q2 = await Relationship.findAll({
        where : {action_receiver : username},

        attributes: ['action_maker']
      });
      
      let conca = q1.concat(q2)
      let friendlist=JSON.stringify(conca).toString();

      friendlist = friendlist.split("action_receiver").join('username');
      friendlist = friendlist.split("action_maker").join('username');
      friendlist = friendlist.split("[").join('');
      friendlist = friendlist.split("]").join('');

      friendlist = JSON.parse(friendlist);

     
      return res.json(friendlist);

    }

    catch(err){

      console.log(err);
      return res.status(500).json({err : "Something went wrong"});
    }
}
  
const get_friends_current_user = async(req, res) => {

  const {username} = req.body;


    try{

      const q1 = await Relationship.findAll({
        where : {action_maker : username , status : 2},

        attributes: ['action_receiver']
      });

      const q2 = await Relationship.findAll({
        where : {action_receiver : username},

        attributes: ['action_maker']
      });
      
      let conca = q1.concat(q2)
      let friendlist=JSON.stringify(conca).toString();

      friendlist = friendlist.split("action_receiver").join('username');
      friendlist = friendlist.split("action_maker").join('username');
      friendlist = friendlist.split("[").join('');
      friendlist = friendlist.split("]").join('');

      friendlist = JSON.parse(friendlist);

     
      return res.json(friendlist);

    }

    catch(err){

      console.log(err);
      return res.status(500).json({err : "Something went wrong"});
    }

}
  
const get_pendingRequests_current_user = async(req, res) => {

  const {username} = req.body;
  //console.log(username);

    try{

      const q1 = await Relationship.findAll({
        where : {action_maker : username , status : 1},

        attributes: ['action_receiver']
      });
      
     
      let pendingList=JSON.stringify(q1).toString();

      pendingList = pendingList.split("action_receiver").join('username');
      pendingList = pendingList.split("[").join('');
      pendingList = pendingList.split("]").join('');

      pendingList = JSON.parse(pendingList);

     
      return res.json(pendingList);

    }

    catch(err){

      console.log(err);
      return res.status(500).json({err : "Something went wrong"});
    }

}

const get_blockedList_current_user = async(req, res) => {

  const {username} = req.body;

    try{

      const q1 = await Relationship.findAll({
        where : {action_maker : username , status : 3},

        attributes: ['action_receiver']
      });
      
     
      let blockedList=JSON.stringify(q1).toString();

      blockedList = blockedList.split("action_receiver").join('username');
      blockedList = blockedList.split("[").join('');
      blockedList = blockedList.split("]").join('');

      blockedList = JSON.parse(blockedList);

     
      return res.json(blockedList);

    }

    catch(err){

      console.log(err);
      return res.status(500).json({err : "Something went wrong"});
    }

}

const post_create_realationship = async(req, res) => {
 
  const action_receiver = req.params.action_receiver;
  const status = req.params.status;
  const {action_maker} = req.body;

//console.log(status);

  try{

    await Relationship.create({action_maker , action_receiver , status});

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