'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('categories', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      product_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'products', key: 'id'},
        onUpdade: 'CASCADE',
        onDelete: 'CASCADE',
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "Não Informado"
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
    await queryInterface.dropTable('categories');
  }
};
