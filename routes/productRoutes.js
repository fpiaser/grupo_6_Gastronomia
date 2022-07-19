const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

//Ruta productos
router.get('/', productController.product);

//Ruta ver carrito
router.get('/carrito', productController.productCart);

//Ruta crear producto
router.get('/nuevoProducto', productController.newProduct);
router.post('/', productController.storeProduct);

//Editar Producto
router.get('/modificarProducto/:id', productController.modProduct);

router.put('/:id', productController.updateProduct);
//Ruta de un producto
router.get('/:id', productController.productDetail);

module.exports = router;