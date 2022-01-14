'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('categorias', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('categorias',{
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name:{
        type: Sequelize.STRING(128),
        allowNull: false
      }

    })

    await queryInterface.createTable('dispositivos',{
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      namedispositivo:{
        type: Sequelize.STRING(128),
        allowNull: false
      },
      cor:{
        type: Sequelize.STRING(16),
        allowNull: false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('categorias');
     */
  }
};
