const express = require("express");
//controllers
 const AuthController = require("./src/controllers/AuthController");
//fim dos controllers

const routes = express.Router();

//rotas
//Auth
    //Register
    routes.post("/api/auth/register", AuthController.store);
//User

//Product

//Cart

//Order

//fim das rotas

module.exports = routes;