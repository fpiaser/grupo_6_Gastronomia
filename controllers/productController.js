const fs = require('fs');
const path = require('path');
const productListPath = path.resolve(__dirname, '../data/products.json');
const productList = JSON.parse(fs.readFileSync(productListPath, 'utf8'));
const { v4: uuidv4 } = require('uuid');

const db = require('../src/database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const Products = require('../src/database/models/Products');
const Categoria = require('../src/database/models/Categoria');
const Unidad_Medida = require('../src/database/models/Unidad_Medida');

const product = db.Products;
const categoria = db.Categoria;
const oum = db.Unidad_Medida;


const productController = {
    product: (req, res)=>{
        db.Products.findAll({
            order: [
                ['id', 'DESC']
            ],
        })
        .then(Products => {
            res.render('../views/products/product', {
            pagina: "Pagina",
            styles: "/css/styles_detail.css",
            products: Products,
            user: req.session.user,
            })
        });
    },    
    productDetail:(req, res) => {
        db.Products.findByPk(req.params.id)
            .then(Products => {
                res.render('products/productDetail', {
                    pagina: "Detalles de Producto",
                    styles: "/css/styles_detail.css",
                    product: Products
                });
            });
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
    newProduct: function (req, res) {
        categoria.findAll()
            .then(function (categorias) {
                res.render('../views/products/newProduct',{
                    pagina: "Nuevo Producto",
                    styles: "/css/registro.css",
                    allCategorias: categorias
                }) 
            })
            .catch(function (error) {
                console.log("Sin conexion", error);
            })
        ;
    },    

    storeProduct: (req, res) => {
        let image = req.file;
        let register = {
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                uom: req.body.uom,
                id_categoria: req.body.id_categoria,
                precio: req.body.precio,
                image: image.filename,
            };
            let newProduct = db.Products.create(register)

            .then(function (product) {
                res.redirect('/product');
            })
            .catch(function (error) {
                console.log("Sin conexion", error);
            });
    },


    modProduct: async function(req, res){
        let id = req.params.id;
        let categorias = await categoria.findAll(); // espera a tener las categorias
        let producto = product.findByPk(id, {
            include: ['categoria']
        });
        producto
            .then(function (producto) {
                return res.render('../views/products/modProduct', { 
                    pagina: "Modificar Producto",
                    styles: "/css/registro.css",
                    allCategorias: categorias,
                    product: producto
                });
            })
        ;
    },
    updateProduct: (req, res) => {
        let Productid = req.params.id; 
        product
            .update({
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                uom: req.body.uom,
                id_categoria: req.body.id_categoria,
                precio: req.body.precio
            }, {
                where: {
                    id: Productid
                }
            })
            .then(function (movie) {
                res.redirect('/product');
            })
        ; 
    },

    deleteProduct: (req, res) => {
        let Productid = req.params.id;
        product
            .destroy({
                where: {
                    id: Productid
                }
            })
            .then(() => {
                res.redirect('/product');
            });
    }

}


module.exports=productController;