const ProductModel = require('../models/productModel')

const createProduct = async function(req ,res){
    const product = req.body;
    const saveProduct = await ProductModel.create(product)
    res.send({msg : saveProduct})
}
module.exports.createProduct = createProduct