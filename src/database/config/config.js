const dotenv = require('dotenv')
dotenv.config({ path: '.env'});

/* 
Crear archivo en la raiz .env
con las siguientes variables
BD_NOMBRE=gastvegana
BD_USER=usuario de la bd
BD_PASS=contraseña de la bd
BD_HOST=127.0.0.1
*/

module.exports={
  "development": {
    "username": process.env.BD_USER,
    "password": process.env.BD_PASS,
    "database": process.env.BD_NOMBRE,
    "host": process.env.BD_HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
