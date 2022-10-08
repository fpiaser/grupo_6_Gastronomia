const express = require('express');
const router = express.Router();
const path = require('path');
const apiController = require('../controllers/apiController');

//Ruta Enpoint Products
router.get('/products', apiController.allProducts);

//Ruta Endpoint Users
router.get('/users', apiController.allUsers);

//Ruta Endpoint Last Product


//Ruta Endpoint Last User



module.exports = router;