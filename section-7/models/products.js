// const products = [];
const fs = require('fs');
const path = require('path');

module.exports = class Products {
    constructor(productTitle) {
        this.productTitle = productTitle;
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
                console.log(err)
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