const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../util/path');
const products = [];

router.get('/add-product', (req, res) => {
    // console.log("In add product");
    // res.send('<form action="/product" method="POST"><input type="text" name="productTitle"/><button type="Submit">Submit</button></></form>');

    // Using sendFile()
    res.render('add-product',{pageTitle:"Add a product to Inventry"});

});

router.post('/product', (req, res) => {
    res.redirect('/');
    products.push({ title: req.body.productTitle });
    console.log({ ...req.body });
});

module.exports = { route: router, array: products };

