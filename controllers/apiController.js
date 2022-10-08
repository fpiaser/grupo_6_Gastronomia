const fs = require('fs');
const path = require('path');
const productListPath = path.resolve(__dirname, '../data/products.json');
const productList = JSON.parse(fs.readFileSync(productListPath, 'utf8'));


const db = require('../src/database/models');
const sequelize = db.sequelize;
const Op = db.Sequelize.Op;
const Products = require('../src/database/models/Products');
const Categoria = require('../src/database/models/Categoria');
const Unidad_Medida = require('../src/database/models/Unidad_Medida');

const { validationResult } = require('express-validator');


const apiEndpoint = {
    
    allProducts: (req, res)=>{
        db.Products.findAll({
            order: [
                ['id', 'ASC']
            ],
        })
        .then(Products => {
            res.json(Products)
        });
    },

    allUsers: (req, res)=>{
        db.Users.findAll({
            order: [
                ['id', 'ASC']
            ],
        })
        .then(Users => {
            res.json(Users)
        });
    },
    


}

module.exports=apiEndpoint;