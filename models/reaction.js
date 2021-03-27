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

      this.belongsTo(User,{foreignKey:'username'});
      this.belongsTo(Post,{foreignKey:'post_id'});
      
    }

    toJSON(){
      return {...this.get(), reaction_id:undefined , post_id:undefined}
    }
  }
  Reaction.init({

    reaction_uuid:{
      unique:true,
      type : DataTypes.UUID,
      allowNull: false,
      defaultValue:DataTypes.UUIDV4
    },
    post_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    reaction_id:{
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    content: {
      
      allowNull: false,
      type: DataTypes.STRING
    },
    username:{
      type: DataTypes.STRING,
      allowNull: false
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