module.exports= (req, res, next) => {
    if(!req.session.user && req.cookies.user){
        req.session.user = req.cookies.user;
    }/* else{
        res.redirect("../user/login");
        
    } */
    next();
}