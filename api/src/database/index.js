const { Sequelize } = require("sequelize");
const dbConfig = require("../config/database");

//models
const User = require("../models/User");
const Product = require("../models/Product");
const Category = require("../models/Category");
const Cart = require("../models/Cart");
const Order = require("../models/Order");
const Address = require("../models/Address");
const Cart_Product = require("../models/Cart_Product");
const Order_Product = require("../models/Order_Product");
const Size = require("../models/Size");
const Color = require("../models/Color");
//fim models

const connection = new Sequelize(dbConfig);

//inits
User.Init(connection);
Product.Init(connection);
Category.Init(connection);
Size.Init(connection);
Color.Init(connection);
Cart.Init(connection);
Order.Init(connection);
Address.Init(connection);
Cart_Product.Init(connection);
Order_Product.Init(connection);
//fim inits

//associations
User.associate(connection.models);
Product.associate(connection.models);
Category.associate(connection.models);
Size.associate(connection.models);
Color.associate(connection.models);
Cart.associate(connection.models);
Order.associate(connection.models);
Address.associate(connection.models);
Cart_Product.associate(connection.models);
Order_Product.associate(connection.models);
//fim associations

module.exports = connection;