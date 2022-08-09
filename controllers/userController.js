const fs = require('fs');
const path = require('path');
const registerListPath = path.resolve(__dirname, '../data/user.json');
const registerList = JSON.parse(fs.readFileSync(registerListPath, 'utf8'));
const { v4: uuidv4 } = require('uuid');


const userController = {
    login: (req, res)=>{
        res.render('../views/users/login',{
            pagina: "Ingreso",
            styles: "/css/registro.css"
        })
        
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

        if (image) {
           product.imagen = image.filename;
       } 
       
       // else if (images) {
       //     product.imagen = images.map(image => image.filename);
       // }

        register.id = uuidv4();

       registerList.push(register);
       

       fs.writeFileSync(registerListPath, JSON.stringify(registerList, null, 2));
        res.redirect('/');
    }
}

module.exports = userController;