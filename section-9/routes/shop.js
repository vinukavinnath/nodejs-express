const express = require('express');
const router = express.Router();
const shopController=require('../controllers/shop');

router.get('/', shopController.getHomePage);

router.get('/cart',shopController.getCartPage);

// Sending productID in the request body
router.post('/cart',shopController.postCart);

router.get('/checkout',shopController.getCheckoutPage);

module.exports = router;