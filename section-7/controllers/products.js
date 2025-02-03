const Product = require('../models/products');


exports.getAddProductPage = (req, res) => {
    res.render('add-product', { pageTitle: "Add a product to Inventry" });
}

exports.postProduct = (req, res) => {
    const products = new Product(req.body.productTitle);
    products.save();
    res.redirect('/');

}

exports.getHomePage = (req, res) => {
    Product.fetch((products) => {
        res.render('shop', { products: products, pageTitle: "Welcome to Vinuka's Shop" });
    });

}


