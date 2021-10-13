'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('carts', { 
      id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id'},
        primaryKey: true,
        autoIncrement: false,
        allowNull: false,
        onUpdade: 'CASCADE',
        onDelete: 'CASCADE',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
