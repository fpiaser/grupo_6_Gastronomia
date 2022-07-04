const path = require('path');

const mainController = {
    home:(req, res)=>{
        res.sendFile(
            path.join(
                __dirname, '../views/home.html'
            )
        )
    },
    productDetail:(req, res)=>{
        res.sendFile(
            path.join(
                __dirname, '../views/products/productDetail.html'
            )
        )
    },
    login:(req, res)=>{
        res.sendFile(
            path.join(
                __dirname, '../views/users/login.html'
            )
        )
    },
    register:(req, res)=>{
        res.sendFile(
            path.join(
                __dirname, '../views/users/register.html'
            )
        )
    },
    ProductCart: (req, res) => {
        res.sendFile(
            path.join(__dirname,'../views/products/productCart.html')
            //res.render("productCart",{})
        );
    }
}

module.exports = mainController;