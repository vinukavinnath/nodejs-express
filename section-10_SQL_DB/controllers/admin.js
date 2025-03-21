const Product = require('../models/products');
const { v4: uuidv4 } = require('uuid');

exports.getAdminPage = (req, res) => {

    req.user.getProducts()
        .then(products => {
            res.render('admin/admin',
                { products: products, isAdmin: true, pageTitle: 'All Products' });
        })
        .catch(err => console.log(err));

    // Product.findAll()
    //     .then(products => {
    //         console.log("--------------Logging Products----------------------");

    //         // In products array there is Product>dataValues
    //         // But sequelize offers dataValues at Top Level
    //         // No need to access product details by <h2><%= product.Product.dataValues.id %></h2>
    //         console.log(products);
    //         res.render('admin/admin',
    //             { products: products, isAdmin: true, pageTitle: 'All Products' });
    //     })
    //     .catch(err => console.log(err));
}

exports.getAddProductPage = (req, res) => {
    res.render('admin/add-product', { pageTitle: "Add a product to Inventry" });
}

exports.postProduct = (req, res) => {
    const title = req.body.productTitle;
    const price = req.body.productPrice;
    const description = req.body.productDescription;

    req.user.createProduct({
        id: uuidv4(),
        title: title,
        description: description,
        price: price
    })

        /*
        Or we can continue with as follows for creating a product associated to a user
    
        Product.create({
            id,
            title,
            description,
            price,
            userUid: user.id
        });
    
        But this method is not OK. Previous one,  using magic methods is popular.
    
        */
        .then(result => {
            console.log(result);
            res.redirect('/admin');
        })
        .catch(err => console.log(err));
}