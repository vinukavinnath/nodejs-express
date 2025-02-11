const Product = require('../models/products');
const { v4: uuidv4 } = require('uuid');

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

    Product.create({
        id: uuidv4(),
        title: title,
        description: description,
        price: price
    })
        .then(result => console.log(result))
        .catch(err => console.log(err));

    res.redirect('/');

}