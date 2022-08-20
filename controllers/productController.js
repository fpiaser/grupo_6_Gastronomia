const fs = require('fs');
const path = require('path');
const productListPath = path.resolve(__dirname, '../data/products.json');
const productList = JSON.parse(fs.readFileSync(productListPath, 'utf8'));
const { v4: uuidv4 } = require('uuid');

const productController = {
    product: (req, res)=>{
        if (req.session.user){
        res.render('../views/products/product',{
            pagina: "Pagina",
            styles: "/css/styles_detail.css",
            products: productList,
            user: req.session.user,
        });
    } else {
        res.render('../views/products/product',{
            pagina: "Pagina",
            styles: "/css/styles_detail.css",
            products: productList,
});
}
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
        if (req.session.user){
        res.render('../views/products/productCart',{
            pagina: "Carrito de Compras",
            styles: "/css/carrito.css",
            user: req.session.user,
        });
    
    } else {
        res.render('../views/products/productCart',{
            pagina: "Carrito de Compras",
            styles: "/css/carrito.css",
        });
    }
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
         let image = req.file;
        //  let images = req.files;

         if (image) {
            product.imagen = image.filename;
        } 
        
        // else if (images) {
        //     product.imagen = images.map(image => image.filename);
        // }

         
         product.id = uuidv4();

        

        productList.push(product);
        // console.log(product);
        // console.log(productList);

        fs.writeFileSync(productListPath, JSON.stringify(productList, null, 2));
         res.redirect('/product');
        

    },

    modProduct: (req, res) => {
        let id = req.params.id;
        let product = productList.find(product => product.id == id)
        res.render('../views/products/modProduct',{
            pagina: "Modificar Producto",
            styles: "/css/registro.css",
            product: product
        })
        
    },
    updateProduct: (req, res) => {
        
        let id = req.params.id;
        let oldProduct= productList.find(product => product.id == id)
        let newProduct={
            id, 
            nombre: req.body.nombre,
            descripcion:req.body.descripcion,
            uom:req.body.uom,
            categoria: req.body.categoria,
            precio: req.body.precio,
            imagen: oldProduct.imagen 
        }
        console.log(oldProduct, newProduct)

        let image= req.file

        if (image) {
            product.imagen = image.filename;
            // console.log("updateProduct", product.imagen);
        } 

        newProduct.id = id

        for (let index = 0; index< productList.length; index++){
            const element = productList[index];
            if (element.id == id) {
                productList[index] = newProduct;
            }
        }
        
        fs.writeFileSync(productListPath, JSON.stringify(productList, null, 2));
        
        
        
        res.redirect('/product')        
    },

    deleteProduct: (req, res) => {
        let id = req.params.id;
        console.log("deleteProduct", id);
        for (let index = 0; index < productList.length; index++) {
            const element = productList[index];
            if (element.id == id) {
                productList.splice(index, 1);
            }
        }

        fs.writeFileSync(productListPath, JSON.stringify(productList, null, 2));

        res.redirect('/product');
    }

}

module.exports=productController;