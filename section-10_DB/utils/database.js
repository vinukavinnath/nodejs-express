const mysql = require('mysql2');

// Establishes the connection
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'RootPassword@123',
    database: 'lanka_groceries'
});

module.exports = pool.promise();