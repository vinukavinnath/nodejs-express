exports.getHomePage = (req, res) => {
    res.render('shop/home', { pageTitle: "Welcome!" });

}
exports.getCartPage = (req, res) => {
    res.render('shop/cart', { pageTitle: "Cart" });

}
exports.getCheckoutPage = (req, res) => {
    res.render('shop/checkout', { pageTitle: "Checkout" });

}