const { Model, Sequelize } = require("sequelize");

class User extends Model{
    static Init(sequelize){
        super.init({
            username: {
                type: Sequelize.STRING,
                unique: true,
            },
            email: {
                type: Sequelize.STRING,
                unique: true,
            },
            password: {
                type: Sequelize.STRING,
            },
            is_admin: {
                type: Sequelize.BOOLEAN,
            }
        }, {
            sequelize
        })
        return this;
    }
    static associate(models){
        this.hasOne(models.Cart, { foreignKey: 'user_id', as: 'cart'})
    }
}

module.exports = User;