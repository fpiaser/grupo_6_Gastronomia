const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const uploadFile=  require('../middlewares/multer');
const { body } = require('express-validator');
const authMiddleware = require('../middlewares/authMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');

const validationResult=[
    body('nombre')
    .notEmpty().withMessage('Debe ingresar un nombre')
    .isLength({min:2}).withMessage('El nombre debe tener al menos 2 caracteres'),
    body('apellido')
    .notEmpty().withMessage('Debe ingresar su apellido')
    .isLength({min:2}).withMessage('El apellido debe tener al menos 2 caracteres'),
    body('email')
    .notEmpty().withMessage('Debe ingresar un Email')
    .isEmail().withMessage('Debe ingresa un Email válido'),
    body('password')
    .notEmpty().withMessage('Debe ingresar una contraseña')
    .isLength({min:8}).withMessage('Su contraseña debe tener al menos 8 caracteres')
    // body('imagen')
    //     .custom((value, { req }) => {
    //         if (req.files.length === 0) {
    //             return false;
    //         }
    //         return true;
    //     }
    // ).withMessage('Debe subir una imagen')
]; 


//Ruta listado usuarios
// ACCESIBLE SOLO CON LOGIN (sino redirige al login)s
router.get('/',authMiddleware, userController.user);

//Ruta crear usuario
// ACCESIBLE SOLO SIN LOGIN (sino redirige al perfil)
router.get('/registro',guestMiddleware, userController.register);
router.post('/',guestMiddleware, uploadFile.single('imagen'),validationResult , userController.create);

//Ruta login
// ACCESIBLE SOLO SIN LOGIN (sino redirige al perfil)
router.get('/login',guestMiddleware, userController.login);
router.post('/login',guestMiddleware, userController.processLogin);

//Ruta editar Usuario
// ACCESIBLE SOLO CON LOGIN (sino redirige al login)
router.get('/editarUsuario/:id',authMiddleware, userController.editUser);
router.put('/:id',authMiddleware,validationResult, userController.update);

//Ruta detalle usuario
// ACCESIBLE SOLO CON LOGIN (sino redirige al login)
router.get('/detalle/:id',authMiddleware, userController.detail);

//Logout
router.get("/logout", userController.logout);

//Check
router.get('/check', function(req,res){
    if (req.session.usuarioLogueado == undefined) {
        res.send('no estas logueado');
    } else {
        res.send('el usuario logueado es ' + req.session.usuarioLogueado.email)
    }
})

module.exports = router;