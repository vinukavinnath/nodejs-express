const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const databaseConnection = (callback) => {
    MongoClient.connect('mongodb+srv://vinnathwlv:Hy0yGZkPU5II4iXY@database.qanmt.mongodb.net/shop?retryWrites=true&w=majority&appName=database')
        .then((client) => {
            console.log('--- CONNECTED TO DATABASE ---');
            _db = client.db();
            callback();
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
}

const getDB = () => {
    if (_db)
        return _db;
    else
        throw new Error('--- NO DATABASE ---');
}

module.exports = {
    dbConn: databaseConnection,
    db: getDB
};