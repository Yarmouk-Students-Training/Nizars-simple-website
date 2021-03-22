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
      this.hasMany(Post,{foreignKey:'user_id'});
      this.hasMany(Comment,{foreignKey:'user_id'});
      this.hasMany(Reaction,{foreignKey:'user_id'});

      this.belongsToMany(this,{through : Relationship ,as: 'actionMaker' ,foreignKey:"actionReceiver"})
      
    }
  };
  User.init({
    user_id: {
      allowNull: false,
      
      primaryKey: true,
      type: DataTypes.STRING
    },

    fname: {
      allowNull: false,
      type: DataTypes.STRING
    },
    
    lname: {
      allowNull: false,
      type: DataTypes.STRING
    },
    
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      validate:{
        isEmail:true;
      }
    },
    
    password_hash: {
      allowNull: false,
      type: DataTypes.STRING
    },
    
    gender: {
      allowNull: false,
      type: DataTypes.STRING
    },

    country: {
      allowNull: false,
      type: DataTypes.STRING
    }}
    , 
    {
    sequelize,
    tableName:'user',
    modelName: 'User',
  });
  return User;
};