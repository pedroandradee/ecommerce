const Product = require("../models/Product");
const Category = require("../models/Category");

module.exports = {
    //INDEX
    async index(req, res){
        try{
            const product = await Product.findByPk(req.params.id, {
                include: {association: 'categories', attributes: ['id', 'category']}
            });
            if(product){
                return res.status(200).json({
                    Status: "Produto encontrado",
                    product
                })
            }
            return res.status(200).json({
                Status: "Produto não encontrado"
            })
        } catch(err){
            return res.status(200).json({
                Status: "Erro interno, " + err
            })
        }
    },
    //INDEX ALL
    async indexAll(req, res){
        const qNew = req.query.new;
        const qCategory = req.query.category;
        let products;
        try{
            if(qNew){
                products = await Product.findAll({ limit: 5, order: [['created_at', 'DESC']]})
            } else if(qCategory){
                products = await Product.findAll({ 
                    include: {
                        association: 'categories', 
                        attributes: ['id', 'category'], 
                        where: {category: qCategory}
                    },
                })
            } else {
                products = await Product.findAll({
                    include: {association: 'categories', attributes: ['id', 'category']}
                });
            }
            return res.status(200).json({
                Status: "Produtos encontrados",
                products
            })
        } catch(err){
            return res.status(200).json({
                Status: "Erro interno, " + err
            })
        }
    },
    //CREATE
    async store(req, res){
        const newProduct = new Product(req.body);
        try{
            const savedProduct = await newProduct.save();
            if(savedProduct){
                req.body.categories.map(async (c)=>{
                    await Category.create({product_id: savedProduct.dataValues.id, category: c});
                })
                return res.status(200).json({
                    Status: "Produto salvo",
                    ...savedProduct.dataValues,
                    categories: req.body.categories
                })
            }
            return res.status(200).json({
                Status: "Erro ao salvar o produto"
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
            const updatedProduct = await Product.findByPk(req.params.id/*,{
                include: {association: 'categories', attributes: ['id', 'category']}
            }*/);
            if(updatedProduct){
                const { categories, ...other } = req.body;
                const saved = await updatedProduct.update(other);
                if(saved){
                    if(categories){
                        categories.map(async(c)=>{
                            if(c.id){
                                const categ = await Category.findByPk(c.id);
                                await categ.update(c);
                            } else {
                                const categ = await Category.create({product_id: updatedProduct.dataValues.id, category: c});
                            }
                        })
                    } else {
                        await Category.destroy({where: { product_id: updatedProduct.id }});
                    }
                    return res.status(200).json({
                        Status: "Produto atualizado",
                        ...req.body
                    });
                }
                return res.status(200).json({
                    Status: "Erro ao atualizar produto"
                })
            }
            return res.status(200).json({
                Status: "Produto não encontrado"
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
            const product = await Product.findByPk(req.params.id);
            if(product){
                await product.destroy();
                return res.status(200).json({
                    Status: "Produto excluído"
                })
            }
            return res.status(200).json({
                Status: "Produto não encontrado"
            })
        } catch(err){
            return res.status(200).json({
                Status: "Erro interno, " + err
            })
        }
    }
}