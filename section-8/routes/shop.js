const express = require('express');
const router = express.Router();
const shopController=require('../controllers/shop');

router.get('/', shopController.getHomePage);

router.get('/cart',shopController.getCartPage);

router.get('/checkout',shopController.getCheckoutPage);

module.exports = router;