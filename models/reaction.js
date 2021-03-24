'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User,Post:Post}) {

      this.belongsTo(User,{foreignKey:'user_id'});
      this.belongsTo(Post,{foreignKey:'post_id'});
      
    }
  };
  Reaction.init({
    reaction_id:{
      primaryKey: true,
      allowNull: false,
      type: DataTypes.STRING
    },
    content: {
      
      allowNull: false,
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Reaction',
  });
  return Reaction;
};