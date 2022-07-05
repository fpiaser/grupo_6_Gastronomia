const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.home);
router.get('/detalle', mainController.productDetail);
router.get('/carrito', mainController.ProductCart);
router.get('/registro', mainController.register);
router.get('/login', mainController.login);
router.get('/NuevoProducto', mainController.newProduct);
router.get('/ModificarProducto', mainController.ModProduct);

module.exports = router;