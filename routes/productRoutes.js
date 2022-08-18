const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const uploadFile=  require('../middlewares/multer');

//Ruta productos
// ACCESIBLE POR CUALQUIERA
router.get('/', productController.product);

//Ruta ver carrito
// ACCESIBLE SOLO CON LOGIN (sino redirige al login)
router.get('/carrito', productController.productCart);

//Ruta crear producto
// ACCESIBLE SOLO CON LOGIN (sino redirige al login)
router.get('/nuevoProducto', productController.newProduct);
router.post('/', uploadFile.single('imagen'), productController.storeProduct);

//Ruta editar Producto
// ACCESIBLE SOLO CON LOGIN (sino redirige al login)
router.get('/modificarProducto/:id', productController.modProduct);

router.put('/:id', productController.updateProduct);

//Ruta de eliminar un producto
// ACCESIBLE SOLO CON LOGIN (sino redirige al login)
router.delete('/:id', productController.deleteProduct);

//Ruta de un producto
// ACCESIBLE POR CUALQUIERA
router.get('/:id', productController.productDetail);

module.exports = router;