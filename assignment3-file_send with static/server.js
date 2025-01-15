const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');

// Or use as 
// app.use('/admin',adminRoutes);
app.use(adminRoutes); 

// Or use as 
// app.use('/admin',shopRoutes.shopRoutes);
app.use(shopRoutes.shopRoutes);

// Sending files trough routes statically
// app.use(express.static(path.join(__dirname,'public')));

app.use((req, res) => {
    res.status(404).send('<h1>Page not Found!</h1>');
});

app.listen(3000);