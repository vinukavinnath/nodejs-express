const Product = require('../models/products');


exports.getAllProducts = (req, res) => {
    Product.fetch((products) => {
        res.render('shop/all-products', { products: products, pageTitle: "All Products" });
    });

}




