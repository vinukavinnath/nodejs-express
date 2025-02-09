const db = require('../utils/database');
const { v4: uuidv4 } = require('uuid');

module.exports = class Products {
    constructor(productTitle, productPrice, productDescription) {
        this.productTitle = productTitle;
        this.productPrice = productPrice;
        this.productDescription = productDescription;
    }

    save() {
        return db.execute('INSERT INTO products(id, title, description, price)VALUES(?,?,?,?)',
            [uuidv4(), this.productTitle, this.productDescription, this.productPrice]);
    }

    static fetchAll() {
        return db.execute('SELECT * FROM products');
    }

    static findById(id) {
        return db.execute('SELECT * FROM products WHERE id=?', [id]);
    }

    static deleteById(id) {
        return db.execute('DELETE FROM products WHERE id=?', [id]);
    }

}