'use strict'
import bcrypt from 'bcrypt'

module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: DataTypes.STRING,
        password: {
            type: DataTypes.STRING,
            set: function(val) {
                if (!val) {
                    return
                }
                const hash = bcrypt.hashSync(val, 9)
                this.setDataValue('password', hash)
            }
        },
        role: DataTypes.STRING,
        avatar: DataTypes.STRING
    })

    return User
}

// // Model aka Interface, we should connect it to DB later
// const users = [
//     {
//         id: 1,
//         username: 'admin',
//         password: 'admin', // should be encrypted
//         role: 'admin'
//     },
//     {
//         id: 2,
//         username: 'user',
//         password: 'user',
//         role: 'user'
//     }
// ]