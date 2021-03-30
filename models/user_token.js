'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      this.belongsTo(User , {foreignKey:'username'});
    }
  };
  user_token.init({
    username: {
     type: DataTypes.STRING,
     allowNull: false,
     unique:true
    },
    refresh_token :{
      type: DataTypes.STRING,
     allowNull: false
    }
  }, {
    sequelize,
    tableName: 'user_token',
    modelName: 'User_Token'
  });
  return user_token;
};