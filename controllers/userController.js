const User=require('../modules/user.js');

const user_register_post = (req, res) => {

    const user = User(req.body);
    console.log(req.body);
    user.save()
        .then((result) => {

            res.redirect('/blogs');
        })
        .catch((err) => console.log(err));
        
}

const user_register_get = (req, res) => {

     res.render('register' , {
         title : "Regiter"
     });
}

module.exports = {

    user_register_post,
    user_register_get
}