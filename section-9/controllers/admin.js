const Product = require('../models/products');

exports.getAdminPage = (req, res) => {
    Product.fetch((products) => {
        res.render('admin/admin',
            {
                products: products,
                pageTitle: "Admin", 
                isAdmin: true
            });
    });
}

exports.getAddProductPage = (req, res) => {
    res.render('admin/add-product', { pageTitle: "Add a product to Inventry" });
}

exports.postProduct = (req, res) => {
    const title = req.body.productTitle;
    const price = req.body.productPrice;
    const description = req.body.productDescription;
    const products = new Product(title, price, description);
    products.save();
    res.redirect('/admin');

}