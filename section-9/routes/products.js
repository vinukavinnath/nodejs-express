const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');

router.get('/all-products', productsController.getAllProducts);

module.exports = router;