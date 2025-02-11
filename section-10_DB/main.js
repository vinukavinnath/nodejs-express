const express = require('express');
const parser = require('body-parser');
const path = require('path');
const pageNotFoundController = require('./controllers/not-found');
const sequelize = require('./utils/database');


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const productRoutes = require('./routes/products');

app = express();
app.use(parser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Adding ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

// Adding routes
app.use(shopRoutes);
app.use(adminRoutes);
app.use(productRoutes);

// Handling page not found
app.use(pageNotFoundController.pageNotFound);

sequelize.sync()
    .then(result => {
        console.log(result);
        app.listen(3000);
    })
    .catch((err) => console.log(err));

app.listen('5000');