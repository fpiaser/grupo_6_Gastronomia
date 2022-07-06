const path = require('path');

const mainController = {
    home:(req, res)=>{
        res.sendFile(
            //path.join(__dirname, '../views/home.html')
            res.render('../views/home',{})
        )
    },
    productDetail:(req, res)=>{
        res.sendFile(
            //path.join(__dirname, '../views/products/productDetail.html')
            res.render('../views/products/productDetail',{})
        )
    },
    login:(req, res)=>{
        res.sendFile(
            //path.join(__dirname, '../views/users/login.html')
            res.render('../views/users/login',{})
        )
    },
    register:(req, res)=>{
        res.sendFile(
            //path.join(__dirname, '../views/users/register.html')
            res.render('../views/users/register',{})
        )
    },
    ProductCart: (req, res) => {
        res.sendFile(
            //path.join(__dirname,'../views/products/productCart.html')
            res.render('../views/products/productCart',{})
        );
    },
    newProduct: (req, res) => {
        res.sendFile(
            //path.join(__dirname,'../views/products/newproduct.html')
            res.render('../views/products/NewProduct',{})
        );
    },
    ModProduct: (req, res) => {
        res.sendFile(
            //path.join(__dirname,'../views/products/modproduct.html')
            res.render('../views/products/ModProduct',{})
        );
    }
}

module.exports = mainController;