const http = require('http');
const express = require('express');
const parser = require('body-parser');
const routes = require('./routes/user-routes');

app = express();
app.use(parser.urlencoded({ extended: false }));

//Setting up ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

//Setting routes
app.use(routes.routes);

app.use((req, res) => {
    res.status(404).render('404', { pageTitle: "404 Error" });
});

app.listen('3000');