'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      reportsto: {
        type: Sequelize.INTEGER,
        allowNull:true
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      picture: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: true
      },
      type_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      organization_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      department_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      designation_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      level_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      bio: {
        type: Sequelize.STRING,
        allowNull: true
      },
      employed: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      confirmed: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      slug: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.addIndex(
      'organization', 
      ['slug', 'email', 'phone'],
      { indicesType: 'UNIQUE'}
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};