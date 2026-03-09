'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Teams', [
      {
        name: 'Budapest Bikák',
        city: 'Budapest',
        league: 'NB1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Debreceni Delfinek',
        city: 'Debrecen',
        league: 'NB1',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Teams', null, {});
  }
};