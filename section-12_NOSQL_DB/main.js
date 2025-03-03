const express = require('express');
const parser = require('body-parser');
const path = require('path');
const pageNotFoundController = require('./controllers/not-found');
const { dbConn: databaseConnection } = require('./utils/database');


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const productRoutes = require('./routes/products');


app = express();
app.use(parser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Adding ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

// Setting a middleware to send user details with each request
// app.use((req, res, next) => {
//     return User.findByPk('1')
//         .then(user => {
//             console.log('----- USER -----');
//             console.log(user);
//             req.user = user;
//             next();
//         })
//         .catch(err => console.log(err));
// });

// Adding routes
app.use(shopRoutes);
app.use(productRoutes);
app.use(adminRoutes);


// Handling page not found
app.use(pageNotFoundController.pageNotFound);

databaseConnection(() => {
    app.listen('3000');
});