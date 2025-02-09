const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'cart.json');

module.exports = class Cart {
    static addProduct(id, title, productPrice) {
        // Fetch the previous cart
        fs.readFile(p, (err, fileContent) => {
            let cart = { products: [], totalPrice: 0 }
            if (!err) {
                cart = JSON.parse(fileContent);
            }
            // Check for existance of product and get Index
            const existingProductIndex = cart.products.findIndex(product => product.id === id);
            const existingProduct = cart.products[existingProductIndex];
            let updatedProducts = [];

            // If YES, increase quantity
            if (existingProduct) {
                // updatedProducts = { ...existingProduct };
                // updatedProducts.quantity = updatedProducts.quantity + 1;
                // Updates cart by replacing new Quantity
                cart.products[existingProductIndex].quantity = existingProduct.quantity + 1;
            }

            // If NO, add new product
            else {
                updatedProducts = { id: id, product: title, quantity: 1 };
                // Updates cart by adding new product
                cart.products = [...cart.products, updatedProducts];
            }

            cart.totalPrice = cart.totalPrice + Number(productPrice);

            // Writes data to file
            fs.writeFile(p, JSON.stringify(cart), err => {
                console.log(err);

            })
        });
    }
}