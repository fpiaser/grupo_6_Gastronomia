function authMiddleware(req, res, next) {
    //if (!req.session.user && req.cookies.user) {
    if (req.session.user != undefined) {
        req.session.user = req.cookies.user
        next();
    }  else {
        res.send('Esta pagina es solo para usuarios')
    } 
}

module.exports = authMiddleware;