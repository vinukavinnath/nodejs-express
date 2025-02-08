const Product = require('../models/products');


exports.getAllProducts = (req, res) => {
    Product.fetch((products) => {
        res.render('shop/all-products', {
            products: products,
            pageTitle: "All Products",
            isAdmin: false
        });
    });
}

exports.getProductById = (req, res) => {
    const productId = req.params.productId;
    Product.findById(productId, product => {
        res.render('shop/product-details', {
            product: product,
            pageTitle: product.productTitle
        });
        console.log(product);
    });
}


