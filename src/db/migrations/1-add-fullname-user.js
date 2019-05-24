module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('Users', 'fullname', Sequelize.STRING, {
            after: 'password'
        })
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('Users', 'fullname', Sequelize.STRING)
    }
}