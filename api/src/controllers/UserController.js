const User = require("../models/User");
const CryptoJS = require("crypto-js");
require("dotenv").config();

module.exports = {
    //Get
    async index(req, res){
        try{
            const user = await User.findByPk(req.params.id);
            
            const { password, ...other} = user.dataValues;
            return res.status(200).json(other)
        } catch(err){
            return res.status(200).json({
                Status: "Erro interno, " + err
            })
        }
    },
    //GetAll
    async indexAll(req, res){
        const query = req.query.new;
        try{
            const users = query ? await User.findAll({ limit: 5, order: [['id', 'DESC']]}) : await User.findAll();
            return res.status(200).json(users);
        } catch(err){
            return res.status(200).json({
                Status: "Erro interno, " + err
            })
        }
    },
    //Get user stats
    async indexUserStats(req, res){
        const date = new Date();
        const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
        let values = [
            {
                id: 0,
                total: 0
            },
            {
                id: 1,
                total: 0
            },
            {
                id: 2,
                total: 0
            },
            {
                id: 3,
                total: 0
            },
            {
                id: 4,
                total: 0
            },
            {
                id: 5,
                total: 0
            },
            {
                id: 6,
                total: 0
            },
            {
                id: 7,
                total: 0
            },
            {
                id: 8,
                total: 0
            },
            {
                id: 9,
                total: 0
            },
            {
                id: 10,
                total: 0
            },
            {
                id: 11,
                total: 0
            },
        ]
        try{
            const users = await User.findAll();
            if(users) {
                users.map((u) =>{
                    const dt = new Date(u.created_at);
                    if(dt > lastYear){
                        if(dt.getMonth() === 0){
                            values[0].total++;
                        } else if( dt.getMonth() === 1){
                            values[1].total++;
                        }else if( dt.getMonth() === 2){
                            values[2].total++;
                        }else if( dt.getMonth() === 3){
                            values[3].total++;
                        }else if( dt.getMonth() === 4){
                            values[4].total++;
                        }else if( dt.getMonth() === 5){
                            values[5].total++;
                        }else if( dt.getMonth() === 6){
                            values[6].total++;
                        }else if( dt.getMonth() === 7){
                            values[7].total++;
                        }else if( dt.getMonth() === 8){
                            values[8].total++;
                        }else if( dt.getMonth() === 9){
                            values[9].total++;
                        }else if( dt.getMonth() === 10){
                            values[10].total++;
                        }else if( dt.getMonth() === 11){
                            values[11].total++;
                        }
                    }
                })
            }
            return res.status(200).json(values);
            /*const data = await User.aggregate([
                { $match: { created_at: { $gte: lastYear } } },
                {
                  $project: {
                    month: { $month: "$created_at" },
                  },
                },
                {
                  $group: {
                        id: "$month",
                        total: { $sum: 1 },
                    },
                },
            ]);
            res.status(200).json(data)*/
        } catch(err){
            return res.status(200).json({
                Status: "Erro interno, " + err
            })
        }
    },
    //Update
    async update(req, res) {
        try{
            const updatedUser = await User.findByPk(req.params.id);
            if(updatedUser){
                if(req.body.password) {
                    updatedUser.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString();
                }
                if(req.body.email) {
                    updatedUser.email = req.body.email;
                }
                await updatedUser.save();
                return res.status(200).json({
                    Status: "Usuário modificado"
                })
            }
            return res.status(200).json({
                Status: "Usuário não encontrado"
            })
        } catch(err){
            return res.status(200).json({
                Status: "Erro interno, " + err
            })
        }
    },
    //Delete
    async delete(req, res) {
        try{
            const user = await User.findByPk(req.params.id);
            if(user){
                await user.destroy();
                return res.status(200).json({
                    Status: "Usuário deletado"
                })
            }
            return res.status(200).json({
                Status: "Erro ao deletar o usuário"
            })
        } catch(err){
            return escape.status(200).json({
                Status: "Erro interno, " + err
            })
        }
    }
}