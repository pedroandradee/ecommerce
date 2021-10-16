const Product = require("../models/Product");
const Category = require("../models/Category");
const Size = require("../models/Size");

module.exports = {
    //INDEX
    async index(req, res){
        try{
            const product = await Product.findByPk(req.params.id, {
                include: [
                    {
                        association: 'categories', 
                        attributes: ['id', 'category']
                    },
                    {
                        association: 'sizes',
                    },
                    {
                        association: 'colors',
                    }
                ]
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
        console.log(qCategory);
        let products;
        try{
            if(qNew){
                products = await Product.findAll({ limit: 5, order: [['created_at', 'DESC']]})
            } else if(qCategory){
                //console.log("categoria");
                products = await Product.findAll({ 
                    include: [
                        {
                            association: 'categories', 
                            attributes: ['id', 'category'], 
                            where: {category: qCategory}
                        },
                        {
                            association: 'sizes'
                        },
                        {
                            association: 'colors'
                        }
                    ],
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
        try{
            const savedProduct = await Product.create({
                title: req.body.title,
                description: req.body.description,
                image: req.body.image,
                price: req.body.price,
                categories: req.body.categories,
                sizes: req.body.sizes,
                colors: req.body.colors
            },{
                include: [
                    {
                        association: 'categories'
                    },
                    {
                        association: 'sizes',
                    },
                    {
                        association: 'colors'
                    }
                ]
            });
            if(savedProduct){
                return res.status(200).json({
                    Status: "Produto salvo",
                    savedProduct
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