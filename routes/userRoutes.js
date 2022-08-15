const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const uploadFile=  require('../middlewares/multer');

router.get('/registro', userController.register);
router.post('/', uploadFile.single('imagen'), userController.saveRegister);

router.get('/login', userController.login);
router.post('/login', userController.processLogin);

module.exports = router;