const express = require('express');
const path=require('path');
const router = express.Router();
const rootDir = require('../util/path');

router.get('/add-product', (req, res) => {
    console.log("In add product");
    // res.send('<form action="/product" method="POST"><input type="text" name="productTitle"/><button type="Submit">Submit</button></></form>');

    // Using sendFile()
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));

});

router.post('/product', (req, res) => {
    res.redirect('/');
    console.log({ ...req.body });
});

module.exports = router;
