const Sequelize = require('sequelize');

const sequelize = new Sequelize('new_groceries', 'root', 'RootPassword@123',
    { dialect: 'mysql', host: 'localhost' }
);

module.exports = sequelize;