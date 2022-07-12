const path = require('path');

const mainController = {
    home:(req, res)=>{
        res.sendFile(
            res.render('../views/home',{})
        )
    },
    login:(req, res)=>{
        res.sendFile(
            res.render('../views/users/login',{})
        )
    },
    register:(req, res)=>{
        res.sendFile(
            res.render('../views/users/register',{})
        )
    },
    productDetail:(req, res)=>{
        res.sendFile(
            res.render('../views/products/productDetail',{})
        )
    },    
    ProductCart: (req, res) => {
        res.sendFile(
            res.render('../views/products/productCart',{})
        );
    },
    newProduct: (req, res) => {
        res.sendFile(
            res.render('../views/products/NewProduct',{})
        );
    },
    ModProduct: (req, res) => {
        res.sendFile(
            res.render('../views/products/ModProduct',{})
        );
    }
}

module.exports = mainController;