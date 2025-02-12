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

exports.getEditProductsPage = (req, res) => {
    const productId = req.params.productId;
    Product.findByPk(productId)
        .then(product => {
            console.log(product);
            if (!product)
                return res.redirect('/');
            res.render('admin/edit-product',
                { product: product, pageTitle: `Edit ${product.title}` }
            )
        })
        .catch(err => console.log(err));

}

exports.postEditedProduct = (req, res) => {
    const productId = req.params.productId;
    Product.findByPk(productId)
        .then(product => {
            if (!product) {
                return res.redirect('/admin');
            }

            // Updates values locally
            product.title = req.body.productTitle;
            product.price = req.body.productPrice;
            product.description = req.body.productDescription;

            // Save to Database
            return product.save();
        })
        .then((product) => {
            console.log(`${product.id} WAS SUCCESSFULLY UPDATED`);
            res.redirect('/admin');
        })
        .catch(err => console.log(err));
};

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

