const fs = require('fs');
const path = require('path');
const productListPath = path.resolve(__dirname, '../data/products.json');
const productList = JSON.parse(fs.readFileSync(productListPath, 'utf8'));
 const { v4: uuidv4 } = require('uuid');

const productController = {
    product: (req, res)=>{
        res.render('../views/products/product',{
            pagina: "Pagina",
            styles: "/css/styles_detail.css",
            products: productList
        });
},

    /* productDetail:(req, res)=>{
        let id= req.params.id;
        producto = productList.find(producto => producto.id == id)
        res.send('producto'+id),{
            
        }
        
    }, */
    
    productDetail: (req, res) => {
        let id = req.params.id;
        producto = productList.find(producto => producto.id == id)
        res.render('products/productDetail', {
            pagina: "Detalles de Producto",
            styles: "/css/styles_detail.css",
            product: producto
        })
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
    
// //POST QUE RECIBE Y PROCESA NUEVO PRODUCTO
     storeProduct: (req, res) => {
         let product = req.body;
         product.id = uuidv4();

        productList.push(product);
        // console.log(product);
        // console.log(productList);

        fs.writeFileSync(productListPath, JSON.stringify(productList, null, 2));
         res.redirect('/product');
        

    },

    modProduct: (req, res) => {
        res.render('../views/products/modProduct',{
            pagina: "Modificar Producto",
            styles: "/css/registro.css"
        })
        
    }
}

module.exports =productController;