module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Members', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      teamId: { type: Sequelize.INTEGER, references: { model: 'Teams', key: 'id' } },
      fullName: { type: Sequelize.STRING },
      position: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE },
      updatedAt: { type: Sequelize.DATE }
    });
  },
  down: async (queryInterface) => await queryInterface.dropTable('Members')
};