import Sequelize from 'sequelize'
import {mysql} from './../../config'

const sequelize = new Sequelize(mysql.host, mysql.database, mysql.username, mysql.password, {
    dialect: 'mysql'
});

var userModel = sequelize['import']('./../../db/model');
const db = {
  User: userModel,
  Product: productModel
}

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;