const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/products', productController.product);
router.get('/products/:id', productController.productDetail);
router.get('/carrito', productController.productCart);
router.get('/nuevoProducto', productController.newProduct);
router.get('/modificarProducto', productController.modProduct);

module.exports = router;