const Product = require('../models/products');

exports.getAdminPage = (req, res) => {
    Product.fetch((products) => {
        res.render('admin/admin', { products: products, pageTitle: "Admin" });
    });
}

exports.getAddProductPage = (req, res) => {
    res.render('admin/add-product', { pageTitle: "Add a product to Inventry" });
}

exports.postProduct = (req, res) => {
    const products = new Product(req.body.productTitle);
    products.save();
    res.redirect('/admin');

}