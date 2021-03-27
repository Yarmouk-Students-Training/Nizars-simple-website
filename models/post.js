'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User ,Comment , Reaction }) {
      
      this.belongsTo(User,{foreignKey:'username'});

      
      this.hasMany(Comment,{foreignKey:'post_id'});
      this.hasMany(Reaction,{foreignKey:'post_id'});

    }

    toJSON(){
      return {...this.get(), post_id:undefined}
    }
  }
  Post.init({
    post_id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },

    post_uuid:{
      unique:true,
      type : DataTypes.UUID,
      allowNull: false,
      defaultValue:DataTypes.UUIDV4
    },
    username:{
      type: DataTypes.STRING,
      allowNull: false
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
    tableName:'post',
    modelName: 'Post',
  });
  return Post;
};