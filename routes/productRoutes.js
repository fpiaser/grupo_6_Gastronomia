const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');


//router.get('product', productController.product);
router.get('/create', productController.newProduct);
router.get(':id/detalle', productController.productDetail);
router.post('/create', productController.newProduct);
router.get(':id/edit', productController.ModProduct);
//router.put(':id/edit', );
//router.delete(':id/', );
router.get('/carrito', productController.ProductCart);
module.exports = router;