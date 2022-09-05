module.exports = (sequelize, dataTypes) => {
    let alias = 'Users';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        nombre: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        apellido: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: dataTypes.DATE,
            allowNull: false
        },
        password: {
            type: dataTypes.DATE,
            allowNull: false
        },
        image:{
            allowNull: false
        },
        Admin:{
            type: dataTypes.BOOLEAN,
            allowNull: false
        },
        
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'delete_at'
    };
    const Users = sequelize.define(alias, cols, config);

return Users
     };