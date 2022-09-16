const path = require('path');

const mainController = {
    home: (req, res)=>{
        if (req.session.user){
            res.render('home',{
                pagina: "Inicio",
                styles: "/css/home.css",
                user: req.session.user,
            });
        } else {
            res.render('../views/home',{
                pagina: "Inicio",
                styles: "/css/home.css",
            })
        }
    }
}

module.exports = mainController;