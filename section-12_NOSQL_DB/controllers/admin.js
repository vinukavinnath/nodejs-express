const Product = require('../models/products');
const { v4: uuidv4 } = require('uuid');

exports.getAdminPage = (req, res) => {

    Product.fetchAll()
        .then(products => {
            console.log(`--- ${products.length} PRODUCTS FETCHED ---`);
            res.render('admin/admin',
                {
                    products: products,
                    pageTitle: "All Products",
                    isAdmin: true
                }
            )
        })
        .catch(err => console.log(err));
}

exports.getAddProductPage = (req, res) => {
    res.render('admin/add-product',
        { pageTitle: "Add a product to Inventry" }
    );
}

exports.postProduct = (req, res) => {
    const title = req.body.productTitle;
    const price = req.body.productPrice;
    const description = req.body.productDescription;

    const product = new Product(title, price, description);
    product.save()
        .then(result => {
            if (result.acknowledged)
                console.log(`--- PRODUCT ADDED --- \n INSERT ID : ${result.insertedId}`);
            res.redirect('/admin');
        })
        .catch(err => {
            console.log(err);
        });

}