'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('leavedetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      remark: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      leave_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      reliever_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      approver_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      hr_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      days: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      start: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      end: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      resumed: {
        type: Sequelize.DATEONLY
      },
      status_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      stage: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('leavedetails');
  }
};