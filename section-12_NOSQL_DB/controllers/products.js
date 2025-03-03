const Product = require('../models/products');


exports.getAllProducts = (req, res) => {
    Product.fetchAll()
        .then(products => {
            console.log(`--- ${products.length} PRODUCTS FETCHED ---`);
            res.render('shop/all-products',
                {
                    products: products,
                    pageTitle: "All Products",
                    isAdmin: false
                }
            )
        })
        .catch(err => console.log(err));

}

exports.getProductById = (req, res) => {

    const productId = req.params.productId;
    Product.fetchById(productId)
        .then(product => {
            if (!product) {
                console.log(`Product with ID ${productId} not found.`);
                return res.status(404)
                    .render('404',
                        {
                            pageTitle: 'Product Not Found'
                        });
            } else {
                console.log(`--- PRODUCT DETAILS FETCHED ---\n  NAME: ${product.title}`);
                res.render('shop/product-details', {
                    product: product,
                    pageTitle: product.title
                })
            }
        })
        .catch(err => console.log(err));

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

    Product.destroy({ where: { id: productId } })
        .then((result) => {
            console.log(`--------${result} RECORDS DELETED--------`);
            res.redirect('/admin');
        })
        .catch(err => console.log(err));
}