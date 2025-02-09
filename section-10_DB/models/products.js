// const products = [];
const { log } = require('console');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');


const getProductsFromFile = callback => {
    const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

    fs.readFile(p, (err, fileContent) => {
        if (err)
            callback([]);
        else
            callback(JSON.parse(fileContent));
    });
}


module.exports = class Products {
    constructor(productTitle, productPrice, productDescription) {
        this.productTitle = productTitle;
        this.productPrice = productPrice;
        this.productDescription = productDescription;
    }

    save() {
        // Commented for implementing save to local storage
        // products.push(this);

        const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

        this.id = uuidv4();

        fs.readFile(p, (err, fileContent) => {
            let products = [];
            if (!err) {
                products = JSON.parse(fileContent);
            }
            products.push(this);

            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(products);

            });
        });

    }

    static fetch(cb) {
        getProductsFromFile(cb);
    }

    static findById(id, cb) {
        getProductsFromFile(products => {
            const product = products.find(product => product.id === id);
            cb(product);
        });
    };
}