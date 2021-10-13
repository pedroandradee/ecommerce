const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
require("dotenv").config();

module.exports = {
    //Register
    async store(req, res) {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
        })
        try {
            const user = await newUser.save(newUser);
            if(user) {
                return res.status(200).json(user);
            }
            return res.status(200).json({
                Status: "Não foi possível salvar"
            })
        } catch (err) {
            return res.status(200).json({
                Status: "Erro interno, " + err
            })
        }
    }
};