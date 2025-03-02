const { db: getDB } = require('../utils/database');

class Product {
    constructor(title, price, description) {
        this.title = title,
            this.price = price,
            this.description = description
    }


    save() {
        const db = getDB();
        db.collection('products')
            .insertOne(this)
            .then(result => {
                if (result.acknowledged)
                    console.log(`--- PRODUCT ADDED --- \n INSERT ID : ${result.insertedId}`);
            })
            .catch(err => {
                console.log(err);
            });
    }
}

module.exports = Product;