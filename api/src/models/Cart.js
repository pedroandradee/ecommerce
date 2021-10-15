const { Model, Sequelize } = require("sequelize");

class Cart extends Model{
    static Init(sequelize){
        super.init({
            type: { type: Sequelize.STRING},
        }, {
            sequelize
        })
        return this;
    }
    static associate(models){
        this.hasMany(models.CartProduct, { foreignKey: 'cart_id', as: 'products'});
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user'});
    }
}

module.exports = Cart;