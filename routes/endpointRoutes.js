const express = require('express');
const router = express.Router();
const path = require('path');
const apiController = require('../controllers/apiController');

//Ruta Enpoint Products
router.get('/products', apiController.allProducts);

//Ruta Endpoint Users
router.get('/users', apiController.allUsers);

//Ruta Endpoint User Detail
router.get('/users/:id', apiController.userDetail);


//Ruta Endpoint Product Detail
router.get('/products/:id', apiController.productDetail);

//Ruta Endpoint Categorias
router.get('/categorias', apiController.categorias);

module.exports = router;