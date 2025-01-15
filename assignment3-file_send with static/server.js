const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// Or use as 
// app.use('/admin',adminRoutes);
app.use(adminRoutes); 

// Or use as 
// app.use('/admin',shopRoutes.shopRoutes);
app.use(shopRoutes.shopRoutes);

app.use((req, res) => {
    res.status(404).send('<h1>Page not Found!</h1>');
});

app.listen(3000);