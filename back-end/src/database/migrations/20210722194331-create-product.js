'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const ProductsTable = queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(100),
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(4,2),
      },
      urlImage: {
        allowNull: false,
        type: Sequelize.STRING(200),
        defaultValue: '',
        field: 'url_image'
      },
    });

    return ProductsTable;
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('products');
  },
};
