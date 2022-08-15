const fs = require('fs');
const path = require('path');
const registerListPath = path.resolve(__dirname, '../data/user.json');
const registerList = JSON.parse(fs.readFileSync(registerListPath, 'utf8'));
const { v4: uuidv4 } = require('uuid');

const userModel = require('../models/UserModel');

const userController = 
{
    //Llamado al formulario de login
    login: (req, res)=>{
        res.render('../views/users/login',{
            pagina: "Ingreso",
            styles: "/css/registro.css"
        })
        
    }, //cierre de session
    logout: (req, res) => {
        req.session.destroy();
        res.clearCookie('user');
        res.redirect("/");
    }, //validacion del logeo
    processLogin: (req, res) => {
        try {
            let currentUser = {
                email: req.body.email,
                password: req.body.password
            }
            
            let validate = userModel.validateUser(currentUser);
            console.log('validate encontrado: ' + JSON.stringify(validate));
            if (validate) {
                req.session.user = validate;
                //if (req.body.remember) {
                    //res.cookie(
                    //    'user', 
                    //    validate.name, { 
                    //        maxAge: 1000 * 60 * 60 * 24 * 7 
                    //    });
                //}
                res.redirect('/');// a la ruta
            }
        } catch (error) {
            res.json({
                success: false,
                error: error.message
            });
        }
    },
    register:(req, res)=>{
        res.render('../views/users/register',{
            pagina: "Registro",
            styles: "/css/registro.css"
        })
        
    },
//POST QUE RECIBE Y PROCESA REGISTROS
    saveRegister:(req, res)=>{
        let register = req.body;
        let image = req.file;
       //  let images = req.files;
        console.log(register);
        if (image) {
            register.imagen = image.filename;
       } 
   
        register.id = uuidv4();

       registerList.push(register);
       
       fs.writeFileSync(registerListPath, JSON.stringify(registerList, null, 2));
        res.redirect('/');
    }
}

module.exports = userController;