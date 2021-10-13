const { Model, Sequelize } = require("sequelize");

class Category extends Model{
    static Init(sequelize){
        super.init({
            category: { type: Sequelize.STRING,},
        }, {
            sequelize
        })
        return this;
    }
    static associate(models){
        this.belongsTo(models.Product, { foreignKey: 'id', as: 'product' });
    }
}

module.exports = Category;