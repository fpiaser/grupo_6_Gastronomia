const fs = require('fs');
const path = require('path');
const uuid = require('uuid');
const bcrypt = require('bcrypt');

const userListPath = path.resolve(__dirname, '../data/user.json');

const User = {
    getAll:()=>{
        const userList = JSON.parse(fs.readFileSync(userListPath, 'utf-8'));
        return userList;
    },
    create: (user) => {
        let newUser = {
            id: uuid.v4(),//genera automaticamenete un id
            name: user.name,
            email: user.email,
            password: bcrypt.hashSync(user.password, 10)
        };

        let userList = User.getAll();

        userList.push(newUser);

        fs.writeFileSync(userListPath, JSON.stringify(userList, null, 2));
    },
    validateUser: (viewUser) => {
        let userList = User.getAll();
        //console.log('userList: ' + JSON.stringify(userList));
        let currentUser = userList.find(user => {
            if (user.email == viewUser.email
                && 
                bcrypt.compareSync(
                viewUser.password, user.password)){
                return user;
                }
            });
        

        if (currentUser) {
            return currentUser;
        }

        throw new Error('Usuario no encontrado');
    }
}

module.exports = User;