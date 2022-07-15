const fs = require('fs');
const path = require('path');
const productListPath = path.resolve(__dirname, '../data/products.json');
const productList = JSON.parse(fs.readFileSync(productListPath, 'utf8'));

const productController = {
    product: (req, res)=>{
        res.render('../views/products/product',{
            pagina: "Productos",
            styles: "/css/styles_detail.css",
            products: productList
        });
},

    /* productDetail:(req, res)=>{
        let id= req.params.id;
        producto = productList.find(producto => producto.id == id)
        res.render('../views/products/productDetail'),{
            // pagina: "Detalles de Producto",
            styles: "/css/styles_detail.css",
            products: producto
        }
        
    } */
    
    productDetail: (req, res) => {
        let id = req.params.id;
        res.render('../views/products/productDetail'), {
            pagina: "Detalles de Producto",
            styles: "/css/styles_detail.css"
        }
    },    
    productCart: (req, res) => {
        res.render('../views/products/productCart',{
            pagina: "Carrito de Compras",
            styles: "/css/carrito.css"
        })
    },
    newProduct: (req, res) => {
        res.render('../views/products/newProduct',{
            pagina: "Nuevo Producto",
            styles: "/css/registro.css"
        })
        
    },
    modProduct: (req, res) => {
        res.render('../views/products/modProduct',{
            pagina: "Modificar Producto",
            styles: "/css/registro.css"
        })
        
    } 
}

module.exports =productController;