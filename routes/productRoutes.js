const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const uploadFile=  require('../middlewares/multer');

//Ruta productos
router.get('/', productController.product);

//Ruta ver carrito
router.get('/carrito', productController.productCart);

//Ruta crear producto
router.get('/nuevoProducto', productController.newProduct);
router.post('/', uploadFile.single('imagen'), productController.storeProduct);

//Editar Producto
router.get('/modificarProducto/:id', productController.modProduct);

router.put('/:id', productController.updateProduct);

//Ruta de eliminar un producto
router.delete('/:id', productController.deleteProduct);

//Ruta de un producto
router.get('/:id', productController.productDetail);

module.exports = router;