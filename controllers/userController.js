const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const registerListPath = path.resolve(__dirname, '../data/user.json');
const registerList = JSON.parse(fs.readFileSync(registerListPath, 'utf8'));
const { v4: uuidv4 } = require('uuid');
let usuarioALoguearse = 0;
let loggedIn = 0;

const db = require('../src/database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const Users = require('../src/database/models/Users');


const user = db.Users;


const userModel = require('../models/UserModel');

const userController = {

     // Llamado al form de registro
    register:(req, res)=>{
        res.render('../views/users/register',{
        pagina: "Registro",
        styles: "/css/registro.css"
        })
            
    },
    
    //POST QUE RECIBE Y PROCESA REGISTROS
    create:(req, res)=>{
        let image = req.file;
        let register = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            image: image.filename,
            Admin: false,
        };

        let newUser = db.Users.create(register)
        
        .then (function (user) {
            res.redirect('/user/login');
        })
    },

    //Llamado al formulario de login
    login: (req, res)=>{
    res.render('../views/users/login',{
        pagina: "Ingreso",
        styles: "/css/registro.css"
        })
    }, 

    //validacion del logeo
    processLogin: async(req, res) => {
        let currentUser = {
        email: req.body.email,
        password: req.body.password
        }
            
        let user = await db.Users.findOne({
        where: {
        email: currentUser.email
        }
        })

        if (bcrypt.compareSync(
        currentUser.password, user.password)){
            console.log (currentUser)
            req.session.user = user;
        res.redirect('/')
        };
    },

    // detalle de usuario
    detail: function (req, res){
        db.Users.findByPk(req.params.id)
        .then(Users => {
        res.render('../views/users/userdetail', {
        pagina: "Editar Usuario",
        styles: "/css/registro.css",
        useredit: Users,
        user: req.session.user
        });
    })
},

   //Llamado al formulario de editar usuario

    editUser: function (req, res){
        db.Users.findByPk(req.params.id)
        .then(Users => {
        res.render('../views/users/useredit', {
        pagina: "Editar Usuario",
        styles: "/css/registro.css",
        useredit: Users,
        user: req.session.user
        });
        //console.log (Users)
        //console.log (useredit)
    })
},

    // Editar usuario
    update: function (req,res) {
        let userId = req.params.id;
    
        user
            .update({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                password: req.body.password,
            }, {
                where: {
                    id: userId
                }
            })
            .then(function (user) {
                res.redirect('/');
            }) 

    },

    //cierre de session
    logout: (req, res) => {
        req.session.destroy();
        res.clearCookie('user');
        res.redirect("/");
    }, 


}

module.exports = userController;