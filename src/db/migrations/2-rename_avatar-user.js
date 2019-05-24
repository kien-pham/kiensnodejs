module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.renameColumn('Users', 'avatar', 'picture')
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.renameColumn('Users', 'picture', 'avatar')
    }
}