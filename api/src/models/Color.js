const { Model, Sequelize } = require("sequelize");

class Color extends Model{
    static Init(sequelize){
        super.init({
            color: { type: Sequelize.STRING},
        }, {
            sequelize
        })
        return this;
    }
    static associate(models){
        this.belongsTo(models.Product, { foreignKey: 'product_id', as: 'product' });
        //this.hasMany(models.Cart_Product, { foreignKey: 'product_id', as: 'cart'});
    }
}

module.exports = Color;