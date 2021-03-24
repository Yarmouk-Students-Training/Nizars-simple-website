'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Posts', {
     
      post_id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      user_id: {
        foriegnKey: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      content_id: {
        
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
    await queryInterface.dropTable('Posts');
  }
};