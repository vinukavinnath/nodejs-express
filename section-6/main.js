const express = require('express');
const parser = require('body-parser');
const http = require('http');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app = express();
app.use(parser.urlencoded({ extended: false }));
// Adding pug
app.set('view engine', 'ejs');
app.set('views', 'views');

// Adding routes
app.use(adminRoutes.route);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: "404 Page not Found!" });
})


app.listen('3000');