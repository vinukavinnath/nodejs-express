const express = require('express');
const parser = require('body-parser');
const pageNotFoundController = require('./controllers/not-found');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const productRoutes=require('./routes/products');

app = express();
app.use(parser.urlencoded({ extended: false }));

// Adding ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

// Adding routes
app.use(shopRoutes);
app.use(adminRoutes);
app.use(productRoutes);

// Handling page not found
app.use(pageNotFoundController.pageNotFound);

app.listen('3000');