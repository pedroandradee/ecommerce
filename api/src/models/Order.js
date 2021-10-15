const { Model, Sequelize } = require("sequelize");

class Order extends Model{
    static Init(sequelize){
        super.init({
            amount: { type: Sequelize.FLOAT},
            status: { type: Sequelize.STRING,},
        }, {
            sequelize
        })
        return this;
    }
    static associate(models){
        this.hasMany(models.OrderProduct, { foreignKey: 'order_id', as: 'products'});
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user'});
        this.hasOne(models.Address, { foreignKey: 'order_id', as: 'address' });
    }
}

module.exports = Order;