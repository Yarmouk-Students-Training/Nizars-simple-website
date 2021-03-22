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

      this.belongsTo(User,{foreignKey:'user_id'})
      this.belongsTo(Post,{foreignKey:'post_id'});
      
    }
  };
  Comment.init({
    comment_id: {
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
    tableName:'comment',
    modelName: 'Comment',
  });
  return Comment;
};