'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Members', [
      {
        teamId: 1,
        fullName: 'Kovács János',
        position: 'kapus',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        teamId: 1,
        fullName: 'Nagy Péter',
        position: 'csatár',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Members', null, {});
  }
};