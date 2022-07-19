const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.product);
router.get('/carrito', productController.productCart);
router.get('/nuevoProducto', productController.newProduct);
router.post('/', productController.storeProduct);
router.get('/modificarProducto', productController.modProduct);
router.get('/:id', productController.productDetail);

module.exports = router;