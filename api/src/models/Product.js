const { Model, Sequelize } = require("sequelize");

class Product extends Model{
    static Init(sequelize){
        super.init({
            title: { type: Sequelize.STRING},
            description: { type: Sequelize.STRING,},
            image: { type: Sequelize.STRING,},
            price: { type: Sequelize.FLOAT,},
            in_stock: { type: Sequelize.BOOLEAN}
        }, {
            sequelize
        })
        return this;
    }
    static associate(models){
        this.hasMany(models.Category, { foreignKey: 'product_id', as: 'categories' });
        this.hasMany(models.Size, { foreignKey: 'product_id', as : 'sizes'});
        this.hasMany(models.Color, { foreignKey: 'product_id', as : 'colors'});
        //this.hasMany(models.Cart_Product, { foreignKey: 'product_id', as: 'cart'});
    }
}

module.exports = Product;