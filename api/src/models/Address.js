const { Model, Sequelize } = require("sequelize");

class Address extends Model{
    static Init(sequelize){
        super.init({
            country: { type: Sequelize.STRING},
            state: { type: Sequelize.STRING,},
            city: { type: Sequelize.STRING,},
            district: { type: Sequelize.STRING,},
            house_number: { type: Sequelize.STRING,},
        }, {
            sequelize
        })
        return this;
    }
    static associate(models){
        this.belongsTo(models.Order, { foreignKey: 'order_id', as: 'order'});
    }
}

module.exports = Address;