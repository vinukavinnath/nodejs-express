const Product = require('../models/products');

exports.getAdminPage = (req, res) => {

    Product.fetchAll().then(([rows, fieldData]) =>
        res.render('admin/admin',
            { products: rows, pageTitle: 'All Products', isAdmin: true })
    ).catch(err => {
        console.log(err);
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
    products.save()
        .then(() => { res.redirect('/admin') })
        .catch(err => console.log(err)
        );


}