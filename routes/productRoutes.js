const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const uploadFile=  require('../middlewares/multer');
const authMiddleware = require('../middlewares/authMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const { body } = require('express-validator');
const path = require('path');


const validationResult=[
    body('nombre')
    .notEmpty().withMessage('Debe ingresar un nombre')
    .isLength({min:5}).withMessage('El nombre debe tener al menos 5 caracteres'),
    body('descripcion')
    .notEmpty().withMessage('Debe ingresar una descripción')
    .isLength({min:20}).withMessage('El nombre debe tener al menos 20 caracteres'),
    body('precio')
    .notEmpty().withMessage('Debe ingresar el precio'),
    body('uom')
    .custom((value, { req }) => {
        if (req.value === 0) {
            return false;
        }
        return true;
    }
).withMessage('Debe seleccionar la Unidad de medida'),
body('imagen')
.custom((value, { req }) => {
    let file= req.file;
    let acceptedExtension= ['.jpg', '.jpeg', '.png', '.gif'];

    if(!file){
        throw new Error('Tienes que subir una imagen');
    }else {
        let fileExtension= path.extname(file.originalname);
        if(!acceptedExtension.includes(fileExtension)){
            throw new Error('Las extensiones de archivo permitidas son:' + acceptedExtension.join(', ') )
        }
    }
    return true;
})
];

const validationMod=[
    body('nombre')
    .notEmpty().withMessage('Debe ingresar un nombre')
    .isLength({min:5}).withMessage('El nombre debe tener al menos 5 caracteres'),
    body('descripcion')
    .notEmpty().withMessage('Debe ingresar una descripción')
    .isLength({min:20}).withMessage('El nombre debe tener al menos 20 caracteres'),
    body('precio')
    .notEmpty().withMessage('Debe ingresar el precio'),
    body('uom')
    .custom((value, { req }) => {
        if (req.value === 0) {
            return false;
        }
        return true;
    }
).withMessage('Debe seleccionar la Unidad de medida')

];

//Ruta productos
// ACCESIBLE POR CUALQUIERA
router.get('/', productController.product);

//Ruta ver carrito
// ACCESIBLE POR CUALQUIERA
router.get('/carrito', productController.productCart);


//Ruta crear producto
// ACCESIBLE SOLO CON LOGIN (sino redirige al login)
router.get('/nuevoProducto' ,authMiddleware ,productController.newProduct);
router.post('/' ,uploadFile.single('imagen'),validationResult, productController.storeProduct);

//Ruta editar Producto
// ACCESIBLE SOLO CON LOGIN (sino redirige al login)
router.get('/modificarProducto/:id',authMiddleware, productController.modProduct);
router.put('/:id', uploadFile.single('imagen'), validationMod, productController.updateProduct);

//Ruta de eliminar un producto
// ACCESIBLE SOLO CON LOGIN (sino redirige al login)
router.delete('/:id',authMiddleware, productController.deleteProduct);

//Ruta de un producto
// ACCESIBLE POR CUALQUIERA
router.get('/:id', productController.productDetail);

module.exports = router;