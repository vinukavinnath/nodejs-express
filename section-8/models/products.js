// const products = [];
const { log } = require('console');
const fs = require('fs');
const path = require('path');

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

    static fetch(callback) {
        const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

        fs.readFile(p, (err, fileContent) => {
            if (err)
                callback([]);
            else
                callback(JSON.parse(fileContent));
        });
    }
}