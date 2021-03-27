'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User,Post}) {

      this.belongsTo(User,{foreignKey:'username'})
      this.belongsTo(Post,{foreignKey:'post_id'});
      
    }

    toJSON(){
      return {...this.get(), comment_id:undefined , post_id:undefined}
    }
  }
  Comment.init({
    comment_id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },

    comment_uuid:{
      unique:true,
      type : DataTypes.UUID,
      allowNull: false,
      defaultValue:DataTypes.UUIDV4
    },
    post_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
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
    tableName:'comment',
    modelName: 'Comment',
  });
  return Comment;
};