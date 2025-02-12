const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');

router.get('/all-products', productsController.getAllProducts);

router.post('/products/:productId', productsController.getProductById);

router.get('/edit/:productId', productsController.getEditProductsPage);

router.post('/edit/:productId',productsController.postEditedProduct);

router.post('/delete/:productId', productsController.deleteProductById);

module.exports = router;