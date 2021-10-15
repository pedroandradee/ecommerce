const { Model, Sequelize } = require("sequelize");

class CartProduct extends Model{
    static Init(sequelize){
        super.init({
            quantity: { type: Sequelize.INTEGER},
        }, {
            sequelize,
            tableName: 'cartproducts'
        })
        return this;
    }
    static associate(models){
        this.belongsTo(models.Product, { foreignKey: 'product_id', as: 'product'});
        this.belongsTo(models.Cart, { foreignKey: 'cart_id', as: 'cart'});
    }
}

module.exports = CartProduct;