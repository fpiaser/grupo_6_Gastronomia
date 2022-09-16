const fs = require('fs');
const path = require('path');
const uuid = require('uuid');
const bcrypt = require('bcrypt');
const db = require('../src/database/models');

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
    validateUser: async (viewUser) => {
        console.log ('validate user', viewUser);
        let user = await db.Users.findOne({
            where: {
                email: viewUser.email

            }
        })

        //return user ? user.toJSON : null ;

        //console.log('userList: ' + JSON.stringify(userList));
        let currentUser = userList.find(user => {
            if (bcrypt.compareSync(
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