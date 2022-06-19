const express = require('express');
const res = require('express/lib/response');
const path = require('path');
const app = express();

const PORT= process.env.PORT || 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'))
});

app.get('/carrito', (req, res) => {
    res.sendFile(path.join(__dirname, './views/productCart.html'))
});

app.get('/detalle', (req, res) => {
    res.sendFile(path.join(__dirname, './views/productDetail.html'))
});

app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'))
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'))
});

app.listen(PORT, () => console.log('http://localhost:'+PORT));
