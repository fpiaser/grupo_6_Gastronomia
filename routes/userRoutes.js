const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const uploadFile=  require('../middlewares/multer');
const {body} = require('express-validator')

//Ruta crear usuario
// ACCESIBLE SOLO SIN LOGIN (sino redirige al perfil)
router.get('/registro', userController.register);
router.post('/', uploadFile.single('imagen'), userController.saveRegister);

//Ruta login
// ACCESIBLE SOLO SIN LOGIN (sino redirige al perfil)
router.get('/login', userController.login);
router.post('/login', userController.processLogin);

module.exports = router;