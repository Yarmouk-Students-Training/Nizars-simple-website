var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    full_name: { 
        
        type: String,
        required: true
    },

    email: { 
    
    type: String,     
    Required:  true ,
    },
    
    password: {

        type: String ,
        required: true,
    },

    dob: { 

        type: Date ,
        required: true
    },

    country: {

        type: String ,
        required: true
    },

    gender: { 

        type: String ,
        required: true
    },
  
});

const User = mongoose.model('Users', userSchema);
module.exports = User;