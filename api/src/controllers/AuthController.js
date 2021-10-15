const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
    //Register
    async store(req, res) {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
        });
        try {
            const findEmail = await User.findOne({ where: { email: newUser.email }});
            const findUsername = await User.findOne({ where: { username: newUser.username }});
            if(findEmail){
                return res.status(200).json({
                    Status: "Email já cadastrado"
                })
            }
            if(findUsername) {
                return res.status(200).json({
                    Status: "Usuário já cadastrado"
                })
            }
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
    },
    //LOGIN
    async login(req, res){
        try{
            const user = await User.findOne({ where: {username: req.body.username}});
            if(user){
                const hashedPass = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
                const pwd = hashedPass.toString(CryptoJS.enc.Utf8);
                if(pwd !== req.body.password){
                    return res.status(200).json({
                        Status: "Senha incorreta"
                    })
                }

                //criar o token
                const acessToken = jwt.sign({
                    id: user.id,
                    is_admin: user.is_admin
                }, process.env.SECRET_KEY,
                {expiresIn: "3d"}
                );

                const { password, ...other} = user.dataValues;
                return res.status(200).json({
                    ...other,
                    acessToken
                })
            }
            return res.status(200).json({
                Status: "Usuário não encontrado"
            })
        } catch (err){
            return res.status(200).json({
                Status: "Erro interno, " + err
            })
        }
    }
};