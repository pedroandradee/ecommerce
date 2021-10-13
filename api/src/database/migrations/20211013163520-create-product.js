'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      size: {
        type: Sequelize.STRING,
      },
      color: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 99.9,
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
    await queryInterface.dropTable('products');
  }
};
