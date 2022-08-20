const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const uploadFile=  require('../middlewares/multer');
const authMiddleware = require('../middlewares/authMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware')

//Ruta productos
// ACCESIBLE POR CUALQUIERA
router.get('/', productController.product);

//Ruta ver carrito
// ACCESIBLE POR CUALQUIERA
router.get('/carrito', productController.productCart);


//Ruta crear producto
// ACCESIBLE SOLO CON LOGIN (sino redirige al login)
router.get('/nuevoProducto',authMiddleware, productController.newProduct);
router.post('/',authMiddleware, uploadFile.single('imagen'), productController.storeProduct);

//Ruta editar Producto
// ACCESIBLE SOLO CON LOGIN (sino redirige al login)
router.get('/modificarProducto/:id',authMiddleware, productController.modProduct);

router.put('/:id',authMiddleware, productController.updateProduct);

//Ruta de eliminar un producto
// ACCESIBLE SOLO CON LOGIN (sino redirige al login)
router.delete('/:id',authMiddleware, productController.deleteProduct);

//Ruta de un producto
// ACCESIBLE POR CUALQUIERA
router.get('/:id', productController.productDetail);

module.exports = router;