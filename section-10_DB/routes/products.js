const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');

router.get('/all-products', productsController.getAllProducts);

router.post('/products/:productId',productsController.getProductById);

router.post('/delete/:productId',productsController.deleteProductById);

module.exports = router;