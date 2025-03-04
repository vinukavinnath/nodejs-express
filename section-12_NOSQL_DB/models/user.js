const { db: getDB } = require('../utils/database');

class User {
    constructor(userId, username, email) {
        this.userId=userId;
        this.username = username;
        this.email = email;
    }

    save() {
        const db = getDB();
        return db.collection('users')
            .insertOne(this)
            .catch(err => console.log(err))
    }

    static findUserByUsername(username) {
        const db = getDB();
        return db.collection('users')
            .findOne({ username: username })
            .catch(err => console.log(err))
    }
}

module.exports = User;