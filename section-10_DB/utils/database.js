const Sequelize = require('sequelize');

// Create sequelize instance
// DB_name, username, password
const sequelize = new Sequelize('new_groceries', 'root', 'RootPassword@123',
    { dialect: 'mysql', host: 'localhost' }
);

module.exports = sequelize;