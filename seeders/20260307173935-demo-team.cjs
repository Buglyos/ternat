'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('teams', [
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

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('teams', null, {});
  }
};
