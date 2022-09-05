
const express = require('express');
const path = require('path');
const app = express();
const methodOverride = require('method-override');
var session = require('express-session');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const db = require('./config/db.js') 

const PORT= process.env.PORT || 3100
const mainRoutes = require('./routes/mainRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const logMiddleware = require('./middlewares/logMiddleware');

//Conexion a la base de datos
db.authenticate()
.then(()=>{
    console.log('Conexión a la Base de datos') 
})
.cath(error =>{
    console.log(error)
})
    


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');




app.use(session({secret: 'secreto'}));
app.use(logMiddleware);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

//app.use(cookieParser());


app.use('/', mainRoutes);
app.use('/user', userRoutes);
app.use('/product', productRoutes);
//const rememberMe = require('./middlewares/rememberMe');
//const cookieParser = require('cookie-parser');

//app.use(rememberMe);

// configuarcion de public static
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log('http://localhost:'+PORT));
