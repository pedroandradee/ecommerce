const express = require("express");
const { verifyToken, verifyTokenAuth, verifyTokenAdmin } = require("./src/controllers/verifyToken");
//controllers
 const AuthController = require("./src/controllers/AuthController");
 const UserController = require("./src/controllers/UserController");
const ProductController = require("./src/controllers/ProductController");
const CartController = require("./src/controllers/CartController");
const OrderController = require("./src/controllers/OrderController");
const StripeController = require("./src/controllers/StripeController");
//fim dos controllers

const routes = express.Router();

//rotas
//Auth
    routes.post("/api/auth/register", AuthController.store);
    routes.post("/api/auth/login", AuthController.login);
//User
    routes.put("/api/users/update/:id", verifyTokenAuth, UserController.update);
    routes.delete("/api/users/delete/:id", verifyTokenAuth, UserController.delete);    
    routes.get("/api/users/find/:id", verifyTokenAdmin, UserController.index);
    routes.get("/api/users/findAll", verifyTokenAdmin, UserController.indexAll);
    routes.get("/api/users/stats", verifyTokenAdmin, UserController.indexUserStats);
//Product
    routes.get("/api/products/:id", ProductController.index);
    routes.get("/api/allProducts", ProductController.indexAll);
    routes.post("/api/products/store", verifyTokenAdmin, ProductController.store);
    routes.put("/api/products/:id", verifyTokenAdmin, ProductController.update);
    routes.delete("/api/products/:id", verifyTokenAdmin, ProductController.delete);
//Cart
    routes.get("/api/carts/:id", verifyTokenAuth, CartController.index);
    routes.get("/api/allCarts", verifyTokenAdmin, CartController.indexAll);
    routes.post("/api/carts", verifyToken, CartController.store);
    routes.put("/api/carts/:id", verifyTokenAuth, CartController.update);
    routes.delete("/api/carts/:id", verifyTokenAuth, CartController.delete);
//Order
    routes.get("/api/orders/:id", verifyTokenAuth, OrderController.index);
    routes.get("/api/allOrders", verifyTokenAdmin, OrderController.indexAll);
    routes.get("/api/income", verifyTokenAdmin, OrderController.income);
    routes.post("/api/orders", verifyToken, OrderController.store);
    routes.put("/api/orders/:id", verifyTokenAdmin, OrderController.update);
    routes.delete("/api/orders/:id", verifyTokenAdmin, OrderController.delete);

//stripe
    routes.post("/api/payment", StripeController.payment);
//fim das rotas

module.exports = routes;