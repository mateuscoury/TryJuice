'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const SalesProductsTable = queryInterface.createTable('salesProducts', {
      sale_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'sales',
          key: 'id',
        },
      },
      product_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'products',
          key: 'id',
        },
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });

    return SalesProductsTable;
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('salesProducts');
  },
};
