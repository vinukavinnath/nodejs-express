const express = require('express');
const path=require('path');
const router = express.Router();
const rootDir = require('../util/path');


router.get('/', (req, res) => {
    console.log("In landing page");
    // res.send('<h1>Welcome!</h1>');

    //Sending file in view
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = {
    shopRoutes: router
};