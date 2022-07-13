const path = require('path');

const productController = {
    productDetail:(req, res)=>{
            res.render('../views/products/productDetail',{})
    },    
    ProductCart: (req, res) => {
            res.render('../views/products/productCart',{})
    },
    newProduct: (req, res) => {
            res.render('../views/products/NewProduct',{})
    },
    ModProduct: (req, res) => {
            res.render('../views/products/ModProduct',{})
    }
}

module.exports = productController;