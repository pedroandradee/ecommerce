const Product = require("../models/Product");
const Cart = require("../models/Cart");
const Cart_Product = require("../models/Cart_Product");

module.exports = {
    //INDEX
    async index(req, res){
        try{
            const ca = await Cart.findOne({
                where: { user_id: req.params.id},
                include: { association: 'products', attributes: ['id', 'product_id', 'quantity'],
                    include: { association: 'product'}
                }
            });
            if(ca){
                return res.status(200).json({
                    Status: "Carrinho encontrado",
                    ca
                })
            }
            return res.status(200).json({
                Status: "Carrinho não encontrado"
            })
        } catch(err){
            return res.status(200).json({
                Status: "Erro interno, " + err
            })
        }
    },
    //INDEX ALL
    async indexAll(req, res){
        let carts;
        try{
            carts = await Cart.findAll({
                include: { association: 'products', attributes: ['id', 'product_id', 'quantity'],
                    include: { association: 'product'}
                }
            });
            return res.status(200).json({
                Status: "Carrinhos encontrados",
                carts
            })
        } catch(err){
            return res.status(200).json({
                Status: "Erro interno, " + err
            })
        }
    },
    //CREATE
    async store(req, res){
        const newCart = new Cart(req.body);
        try{
            const savedCart = await newCart.save();
            return res.status(200).json({
                Status: "Carrinho criado",
                savedCart
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
            const updatedCart = await Cart.findOne({ where: { user_id: req.params.id}});
            if(updatedCart){
                if(req.body.action){
                    //adicionar produto ao carrinho
                    if(req.body.action === "adicionar"){
                        const product = await Product.findByPk(req.body.product_id);
                        if(product){
                            await Cart_Product.create({ cart_id: updatedCart.id, product_id: product.id});
                            return res.status(200).json({
                                Status: "Produto adicionado ao carrinho"
                            })
                        }
                        return res.status(200).json({
                            Status: "Produto não encontrado"
                        })
                    }
                    //remover produto do carrinho
                    if(req.body.action === "remover"){
                        const cp = await Cart_Product.findByPk(req.body.id);
                        await cp.destroy();
                        return res.status(200).json({
                            Status: "Produto removido do carrinho"
                        })
                    }
                }
                console.log("veio aqui");
                console.log(req.body.quantity);
                //modificar a quantidade de um produto no carrinho
                const cartP = await Cart_Product.findByPk(req.body.id);
                cartP.quantity = req.body.quantity;
                await cartP.save();
                return res.status(200).json({
                    Status: "Quantidade modificada"
                })
            }
            return res.status(200).json({
                Status: "Carrinho não encontrado"
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
            const cart = await Cart.findByPk(req.params.id);
            if(cart){
                await cart.destroy();
                return res.status(200).json({
                    Status: "Carrinho excluído"
                })
            }
            return res.status(200).json({
                Status: "Carrinho não encontrado"
            })
        } catch(err){
            return res.status(200).json({
                Status: "Erro interno, " + err
            })
        }
    }
}