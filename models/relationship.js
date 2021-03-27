'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Relationship extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Relationship.init({
    status: {
      allowNull:false,
      type:DataTypes.INTEGER
    },
    action_maker:{
      type: DataTypes.STRING,
      allowNull: false
    },
    action_receiver:{
      type: DataTypes.STRING,
      allowNull: false
    }, // i love you 
    //me too
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
    tableName: 'relationship',
    modelName: 'Relationship',
  });
  return Relationship;
};