'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const UsersTable = queryInterface.createTable('users', { //aqui
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(100),
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(32),
      },
      role: {
        allowNull: false,
        type: Sequelize.STRING(20),
      },
    });

    return UsersTable;
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('users');
  },
};
