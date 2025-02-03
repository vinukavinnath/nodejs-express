const express = require('express');
const router = express.Router();
const productController = require('../controllers/products');

router.get('/add-product', productController.getAddProductPage);

router.post('/product', productController.postProduct);

module.exports = router;

