const express = require('express');
const parser = require('body-parser');
const path = require('path');
const pageNotFoundController = require('./controllers/not-found');
const sequelize = require('./utils/database');
const Product = require('./models/products');
const User = require('./models/user');


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const productRoutes = require('./routes/products');
const { constants } = require('buffer');
const { FORCE } = require('sequelize/lib/index-hints');

app = express();
app.use(parser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Adding ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

// Setting a middleware to send user details with each request
app.use((req, res, next) => {
    return User.findByPk('1')
        .then(user => {
            console.log('----- USER -----');
            console.log(user);
            req.user = user;
            next();
        })
        .catch(err => console.log(err));
});

// Adding routes
app.use(shopRoutes);
app.use(adminRoutes);
app.use(productRoutes);

// Adding associations
User.hasMany(Product);
Product.belongsTo(User, { constants: true, onDelete: 'CASCADE' });

// Handling page not found
app.use(pageNotFoundController.pageNotFound);

// Syncing Sequelize
sequelize.sync()
    .then(() => {
        return User.findByPk('1')
    })
    .then(user => {
        if (!user) {
            return User.create({ uId: '1', name: 'Vinuka', email: 'example@gmail.com' });
        }
        return user;
    })
    .then(() => {
        app.listen('5000', () => {
            console.log('--- LISTENING ON PORT 5000 ---');
        })
    })
    .catch((err) => console.log(err));