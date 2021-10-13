const { Model, Sequelize } = require("sequelize");

class Order extends Model{
    static Init(sequelize){
        super.init({
            amount: { type: Sequelize.FLOAT},
            description: { type: Sequelize.STRING,},
            image: { type: Sequelize.STRING,},
            size: { type: Sequelize.STRING,},
            color: { type: Sequelize.STRING,},
            price: { type: Sequelize.STRING,},
        }, {
            sequelize
        })
        return this;
    }
    static associate(models){
        this.hasMany(models.Cart_Product, { foreignKey: 'cart_id', as: 'products'});
        this.belongsTo(models.User, { foreignKey: 'id', as: 'user'});
        this.hasOne(models.Address, { foreignKey: 'id', as: 'address' });
    }
}

module.exports = Order;