const express = require('express');
const path = require('path');
const app = express();

const PORT= process.env.PORT || 3000
const mainRoutes = require('./routes/mainRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', mainRoutes);
app.use('/user', userRoutes);
app.use('/product', productRoutes);

// configuarcion de public static
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log('http://localhost:'+PORT));
