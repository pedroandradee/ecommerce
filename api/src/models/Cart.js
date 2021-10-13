const { Model, Sequelize } = require("sequelize");

class Cart extends Model{
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
        this.hasMany(models.Cart_Product, { foreignKey: 'cart_id', as: 'products'});
        this.belongsTo(models.User, { foreignKey: 'id', as: 'user'});
    }
}

module.exports = Cart;