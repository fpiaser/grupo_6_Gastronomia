const path = require('path');

const mainController = {
    home:(req, res)=>{
            res.render('../views/home',{})
    }
}

module.exports = mainController;