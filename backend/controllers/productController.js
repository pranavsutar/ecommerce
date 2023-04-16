const Product = require('../model/productModel');

// Create new product
exports.createProduct = async (req, res, next) => {

    const product = await Product.create(req.body); 
    res.status(201).json({
        success: true,
        product
    })
}

exports.getAllProducts = (req, res) => {
    res.status(200).json({
        message: 'This route will show all products'
    });
}