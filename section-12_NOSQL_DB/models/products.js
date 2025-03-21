const { db: getDB } = require('../utils/database');
const { ObjectId } = require('mongodb');


class Product {
    constructor(title, price, description, userId) {
        this.title = title,
            this.price = price,
            this.description = description,
            this.userId = userId;
    }

    save() {
        const db = getDB();
        return db.collection('products')
            .insertOne(this)
            .catch(err => {
                console.log(err);
            });
    }

    static fetchAll() {
        const db = getDB();
        return db.collection('products')
            .find({})
            .toArray()
            .catch(err => {
                console.log(err);
            });

    }

    static fetchById(productId) {
        const db = getDB();
        return db.collection('products')
            .findOne({ _id: ObjectId.createFromHexString(productId) })
            .catch(err => {
                console.log(err);
            });
    }

    static updateById(productId, updatedValues) {
        const db = getDB();
        return db.collection('products')
            .updateOne(
                { _id: ObjectId.createFromHexString(productId) },
                {
                    $set: updatedValues
                }
            )
            .catch(err => console.log(err)
            )
    }

    static deleteById(productId) {
        const db = getDB();
        return db.collection('products')
            .deleteOne({ _id: ObjectId.createFromHexString(productId) })
            .catch(err => console.log(err));
    }
}

module.exports = Product;