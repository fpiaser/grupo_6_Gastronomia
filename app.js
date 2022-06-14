const express = require('express');
const res = require('express/lib/response');
const path = require('path');

const app = express();

const publicFolderPath = path.resolve(__dirname,'public');
app.use(express.static(publicFolderPath));

app.listen(3000, ()=>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
});