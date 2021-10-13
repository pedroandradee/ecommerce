const { Model, Sequelize } = require("sequelize");

class Address extends Model{
    static Init(sequelize){
        super.init({
            amount: { type: Sequelize.FLOAT},
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
        //this.belongsTo(models.User, { foreignKey: 'id', as: 'user'});
    }
}

module.exports = Address;