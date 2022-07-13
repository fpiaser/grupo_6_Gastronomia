const path = require('path');

const userController = {
    login:(req, res)=>{
        res.render('../views/users/login',{})
    },
    register:(req, res)=>{
            res.render('../views/users/register',{})
    }
}

module.exports = userController;