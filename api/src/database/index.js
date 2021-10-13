const { Sequelize } = require("sequelize");
const dbConfig = require("../config/database");

//models
const User = require("../models/User");
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const Category = require("../models/Category");
const Order = require("../models/Order");
const Address = require("../models/Address");
const Cart_Product = require("../models/Cart_Product");
//fim models

const connection = new Sequelize(dbConfig);

//inits
User.Init(connection);
Cart.Init(connection);
Product.Init(connection);
Category.Init(connection);
Order.Init(connection);
Address.Init(connection);
Cart_Product.Init(connection);
//fim inits

//associations
User.associate(connection.models);
Cart.associate(connection.models);
Product.associate(connection.models);
Category.associate(connection.models);
Order.associate(connection.models);
Address.associate(connection.models);
Cart_Product.associate(connection.models);
//fim associations

module.exports = connection;