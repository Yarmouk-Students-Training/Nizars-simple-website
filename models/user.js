'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Post:Post,Comment:Comment,Reaction:Reaction , Relationship : Relationship}) {
      this.hasMany(Post,{foreignKey:'username'});
      this.hasMany(Comment,{foreignKey:'username'});
      this.hasMany(Reaction,{foreignKey:'username'});

      this.belongsToMany(this,{through : Relationship ,as: 'actionMaker' ,foreignKey:"actionReceiver"})
      this.belongsToMany(this,{through : Relationship ,as: 'actionReceiver' ,foreignKey:"actionMaker"})
      
    }
  };
  User.init({
    username: {
      allowNull: false,
      
      primaryKey: true,
      type: DataTypes.STRING
    },

    first_name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    
    last_name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    
    email: {
      unique:true,
      allowNull: false,
      type: DataTypes.STRING,

      validate:{
        isEmail:true
      }
    },
    
    password_hash: {
      allowNull: false,
      type: DataTypes.STRING
    },
    gender: {
      allowNull: false,
      type: DataTypes.ENUM('Male' , 'Female')
    },

    country: {
      allowNull: false,
      type: DataTypes.STRING
    },
    DOB:{
      allowNull:false,
      type:DataTypes.DATE
    }
  
  }
    ,
     
    {
    sequelize,
    tableName:'user',
    modelName: 'User',
  });
  return User;
};