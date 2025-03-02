const Product = require('../models/products');
const Cart = require('../models/cart');

exports.getHomePage = (req, res) => {
    res.render('shop/home', { pageTitle: "Welcome!" });

}
exports.getCartPage = (req, res) => {
    res.render('shop/cart', { pageTitle: "Cart" });

}
exports.getCheckoutPage = (req, res) => {
    res.render('shop/checkout', { pageTitle: "Checkout" });

}

exports.postCart = (req, res) => {
    const productId = req.body.productId;
    Product.findById(productId, product => {
        Cart.addProduct(productId, product.productTitle, product.productPrice);
    });
    res.redirect('/cart');
}