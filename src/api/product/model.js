
module.exports = (sequelize, DataTypes) => {
    var Product = sequelize.define('Product', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            
        },
        price: DataTypes.DECIMAL,
        cover: DataTypes.STRING,
        quantity: DataTypes.INTEGER,
        category: DataTypes.STRING
    })

    return Product
}