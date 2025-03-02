const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

router.get('/admin', adminController.getAdminPage);

router.get('/add-product', adminController.getAddProductPage);

router.post('/product', adminController.postProduct);

module.exports = router;

