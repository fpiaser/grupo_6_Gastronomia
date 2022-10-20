const { validationResult }  = require('express-validator');

const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const db = require('../src/database/models');

const user = db.Users;

const userController = {
        user: (req, res)=>{
            db.Users.findAll({
                order: [
                    ['id', 'DESC']
                ],
            })
            .then(Users => {
                res.render('../views/users/users', {
                pagina: "Usuarios",
                styles: "/css/user.css",
                users: Users,
                user: req.session.user,
                })
            });
        },   

     // Llamado al form de registro
    register:(req, res)=>{
        res.render('../views/users/register',{
        pagina: "Registro",
        styles: "/css/registro.css"
        })
    },
    
    //POST QUE RECIBE Y PROCESA REGISTROS
    create:async(req, res)=>{
        console.log("Datos ingresados" + req)
        const resultValidation = validationResult(req);   
        
        if (!resultValidation.isEmpty()) {
            return res.render('../views/users/register', {
            errors: resultValidation.mapped(),
            pagina: "Registro",
            styles: "/css/registro.css",
            old: req.body
            });
        }

        const userInDB =  await db.Users.findOne({
            where: {
            email: req.body.email
            }
            });
		if (userInDB) {
			return res.render('../views/users/register', {
				errors: {
					email: {
						msg: 'Este email ya está registrado'
					}
				},
                pagina: "Registro",
                styles: "/css/registro.css",
				old: req.body
			});
		}

        let image = req.file;
        user
        .create(
            {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                image: image.filename,
                Admin: false,
            }
        )        
        .then (() => {
            return res.redirect('/user/login')})
        .catch(error => res.send(error)) 
                
        
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
        const validation = validationResult(req);   
        
        if (!validation.isEmpty()) {
            return res.render('../views/users/login', {
            errors: validation.mapped(),
            pagina: "Ingreso",
            styles: "/css/registro.css",
            old: req.body
            });
        }else{
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
                    req.session.user = user;
                    console.log("Es admin",user)
                    if (req.body.remember != undefined) {
                        res.cookie('recordarme',
                        user.email, { maxAge: 60000 })
                    }
                res.redirect('/')
                };
        }

       
    },

    // detalle de usuario
    detail: function (req, res){
        db.Users.findByPk(req.params.id)
        .then(Users => {
        res.render('../views/users/userdetail', {
        pagina: "Editar Usuario",
        styles: "/css/user.css",
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
        res.clearCookie('recordarme');
        res.redirect("/");
    }, 


}

module.exports = userController;