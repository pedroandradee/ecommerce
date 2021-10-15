const { Model, Sequelize } = require("sequelize");

class OrderProduct extends Model{
    static Init(sequelize){
        super.init({
            quantity: { type: Sequelize.INTEGER},
        }, {
            sequelize,
            tableName: 'orderproducts'
        })
        return this;
    }
    static associate(models){
        this.belongsTo(models.Product, { foreignKey: 'product_id', as: 'product'});
        this.belongsTo(models.Order, { foreignKey: 'order_id', as: 'order'});
    }
}

module.exports = OrderProduct;