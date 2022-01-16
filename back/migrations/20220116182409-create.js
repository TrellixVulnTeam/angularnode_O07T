'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('category',{
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      namecategory:{
        type: Sequelize.STRING(128),
        allowNull: false
      },
      create_at:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at:{
        type: Sequelize.DATE,
      }
    })

    await queryInterface.createTable('device',{
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      namedevice:{
        type: Sequelize.STRING(128),
        allowNull: false,
      },
      color:{
        type: Sequelize.STRING(16),
        allowNull: false,
      },
      partnumber:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      idcategory: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      create_at:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at:{
        type: Sequelize.DATE,
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
