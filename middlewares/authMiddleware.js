function authMiddleware(req, res, next) {
    //if (!req.session.user && req.cookies.user) {
    
    if(req.session.user){
        console.log("es admin? ", req.session.user.Admin)
        next();
    } else {
        res.send('Esta pagina es solo para usuarios')
    }
    
    
    /* let usuarioLogueado = req.session.user 
    console.log("usewr pepepe session", usuarioLogueado)
    if (req.session.user != undefined) {
        console.log('parte verdadera')
        req.session.user = req.cookies.user
        console.log('req session', req.session.user)
        next();
    }  else {
        res.send('Esta pagina es solo para usuarios')
    } */ 
}

module.exports = authMiddleware;