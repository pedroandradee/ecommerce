const Order = require("../models/Order");
const Order_Product = require("../models/Order_Product");
const Address = require("../models/Address");

module.exports = {
    //INDEX
    async index(req, res){
        try{
            const orders = await Order.findAll({
                where: { user_id: req.params.id},
                include: [
                    { 
                        association: 'products', attributes: ['id', 'product_id', 'quantity'],
                        include: { association: 'product'},
                    },
                    {
                        association: 'address'
                    }
                ]
            });
            if(orders){
                return res.status(200).json({
                    Status: "Pedidos encontrados",
                    orders
                })
            }
            return res.status(200).json({
                Status: "Nenhum pedido encontrado"
            })
        } catch(err){
            return res.status(200).json({
                Status: "Erro interno, " + err
            })
        }
    },
    //INDEX ALL
    async indexAll(req, res){
        let orders;
        try{
            orders = await Order.findAll({
                include: [
                    { 
                        association: 'products', attributes: ['id', 'product_id', 'quantity'],
                        include: { association: 'product'},
                    },
                    {
                        association: 'address'
                    }
                ]
            });
            return res.status(200).json({
                Status: "Pedidos encontrados",
                orders
            })
        } catch(err){
            return res.status(200).json({
                Status: "Erro interno, " + err
            })
        }
    },
    //CREATE
    async store(req, res){
        const newOrder = new Order(req.body);
        try{
            const savedOrder = await newOrder.save();
            if(savedOrder){
                req.body.products.map(async (p)=>{
                    await Order_Product.create({
                        order_id: savedOrder.dataValues.id, 
                        product_id: p.id,
                        quantity: p.quantity
                    });
                });
                //const address = new Address();
                await Address.create({
                    order_id: savedOrder.dataValues.id,
                    ...req.body.address
                });
                return res.status(200).json({
                    Status: "Produto salvo",
                    ...savedOrder.dataValues,
                    products: req.body.products,
                    address: req.body.address
                })
            }
            return res.status(200).json({
                Status: "Erro ao salvar o produto"
            })
            return res.status(200).json({
                Status: "Pedido criado",
                savedOrder
            })
        } catch(err){
            return res.status(200).json({
                Status: "Erro interno, " + err
            })
        }
    },
    //UPDATE
    async update(req, res){
        try{
            const order = await Order.findByPk(req.params.id);
            if(order){
                order.status = req.body.status;
                const updatedOrder = await order.save();
                return res.status(200).json({
                    Status: "Pedido modificado",
                    updatedOrder
                })
            }
            return res.status(200).json({
                Status: "Pedido não encontrado"
            });
        } catch(err){
            return res.status(200).json({
                Status: "Erro interno, " + err
            })
        }
    },
    //DELETE
    async delete(req, res){
        try{
            const order = await Order.findByPk(req.params.id);
            if(order){
                await order.destroy();
                return res.status(200).json({
                    Status: "Pedido excluído"
                })
            }
            return res.status(200).json({
                Status: "Pedido não encontrado"
            })
        } catch(err){
            return res.status(200).json({
                Status: "Erro interno, " + err
            })
        }
    },
    //GET MONTHLY INCOME
    async income(req, res){
        let values = [];
        const date = new Date();
        const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
        values.push({id: lastMonth.getMonth(), total: 0});
        const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
        values.push({id: previousMonth.getMonth(), total: 0});
        try{
            const orders = await Order.findAll();
            if(orders) {
                orders.map((u) =>{
                    const dt = new Date(u.created_at);
                    if(dt >= previousMonth){
                        if(dt >= lastMonth){
                            values[0].total = values[0].total + u.amount;
                        } else {
                            values[1].total = values[1].total + u.amount;
                        }
                    }
                });
                return res.status(200).json({
                    Status: "Estatisticas encontradas",
                    values
                })
            }
            return res.status(200).json({
                Status: "Nenhum pedido encontrado"
            })
        } catch(err){
            return res.status(200).json({
                Status: "Erro interno, " + err
            })
        }
    }
}