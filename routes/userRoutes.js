const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const uploadFile=  require('../middlewares/multer');
const {body} = require('express-validator')
const authMiddleware = require('../middlewares/authMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware')


//Ruta ves usuarios
router.get('/users', userController.users)

//Ruta crear usuario
// ACCESIBLE SOLO SIN LOGIN (sino redirige al perfil)
router.get('/registro',guestMiddleware, userController.register);
router.post('/',guestMiddleware, uploadFile.single('imagen'), userController.saveRegister);

//Ruta login
// ACCESIBLE SOLO SIN LOGIN (sino redirige al perfil)
router.get('/login',guestMiddleware, userController.login);
router.post('/login',guestMiddleware, userController.processLogin);

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