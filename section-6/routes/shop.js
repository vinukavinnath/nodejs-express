const express = require('express');
const router = express.Router();
const products = require('./admin');


router.get('/', (req, res) => {
    // console.log("In landing page");
    // res.send('<h1>Welcome!</h1>');

    //Sending file in view
    console.log(products.array);
    const product = products.array;
    res.render('shop', { product: product, pageTitle: "Welcome to Vinuka's Shop" })
});

module.exports = router;