const { Model, Sequelize } = require("sequelize");

class Cart_Product extends Model{
    static Init(sequelize){
        super.init({
            title: { type: Sequelize.STRING},
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
        //this.belongsTo(models.Product, { foreignKey: 'id', as: 'product'});
        //this.belongsTo(models.Cart, { foreignKey: 'id', as: 'cart'});
        //this.belongsTo(models.Order, { foreignKey: 'id', as: 'cart'});
    }
}

module.exports = Cart_Product;