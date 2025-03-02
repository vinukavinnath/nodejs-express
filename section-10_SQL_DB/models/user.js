const sequelize = require('../utils/database');
const { DataTypes } = require('sequelize');

// Defines user model
const User = sequelize.define('user', {
    uId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { tableName: 'users' });

module.exports = User;