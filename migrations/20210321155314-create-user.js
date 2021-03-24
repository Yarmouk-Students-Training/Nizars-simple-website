'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('User', {
      user_id: {
        allowNull: false,
        
        primaryKey: true,
        type: Sequelize.STRING
      },

      fname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      
      lname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      
      password_hash: {
        allowNull: false,
        type: Sequelize.STRING
      },
      
      gender: {
        allowNull: false,
        type: Sequelize.STRING
      },

      country: {
        allowNull: false,
        type: Sequelize.STRING
      },
      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('User');
  }
};