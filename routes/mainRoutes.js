const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.home);

/* router.get('/pruebaSession', function(req,res){
    if(req.session.numeroVisitas == undefined) {
        req.session.numeroVisitas = 0;
    }
    req.session.numeroVisitas++;

    res.send('Session tiene el numero: ' + req.session.numeroVisitas)
}); */

module.exports = router;