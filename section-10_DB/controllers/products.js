const { where } = require('sequelize');
const Product = require('../models/products');


exports.getAllProducts = (req, res) => {

    Product.findAll()
        .then(products => {
            console.log("--------------Logging Products----------------------");

            // In products array there is Product>dataValues
            // But sequelize offers dataValues at Top Level
            // No need to access product details by <h2><%= product.Product.dataValues.id %></h2>
            console.log(products);
            res.render('shop/all-products',
                { products: products, isAdmin: false, pageTitle: 'All Products' });
        })
        .catch(err => console.log(err));
}

exports.getProductById = (req, res) => {
    const productId = req.params.productId;

    // Using findAll()
    Product.findAll(
        {
            where: {
                id: productId
            }
        }
        
    // Returns array of products even if there is only one product matches the query
    ).then(([product]) => {
        console.log(product);

        res.render('shop/product-details', {
            product: product,
            pageTitle: product.title
        });
    })
        .catch(err => { console.log(err) });

    // Using findByPk()
    // Product.findByPk(productId)
    //     .then((product) => {
    //         console.log(product);

    //         res.render('shop/product-details', {
    //             product: product,
    //             pageTitle: product.title
    //         });
    //     })
    //     .catch(err => { console.log(err) });
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

