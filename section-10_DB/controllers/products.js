const Product = require('../models/products');


exports.getAllProducts = (req, res) => {
    Product.fetchAll().then(([rows, fieldData]) =>
        res.render('shop/all-products',
            { products: rows, isAdmin: false, pageTitle: 'All Products' })
    ).catch(err => {
        console.log(err);
    });
}

exports.getProductById = (req, res) => {
    const productId = req.params.productId;

    Product.findById(productId)
        .then(([productData, fieldData]) => {
            // console.log(result);

            res.render('shop/product-details', {
                product: productData[0],
                pageTitle: productData[0].title
            });
        })
        .catch(err => { console.log(err) });
}

exports.deleteProductById = (req, res) => {
    const productId = req.params.productId;
    Product.deleteById(productId)
        .then(([resultHeader]) => {
            console.log(resultHeader.affectedRows, "products Deleted!");
            res.redirect('/admin');
        })
        .catch(err => console.log(err)
        );
}

