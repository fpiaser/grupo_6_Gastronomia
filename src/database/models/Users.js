module.exports = (sequelize, dataTypes) => {
    let alias = 'Users';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        nombre: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        apellido: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        image:{
            type: dataTypes.STRING(100),
            allowNull: false
        },
        Admin:{
            type: dataTypes.BOOLEAN,
            allowNull: false
        },
        
    };
    let config = {
        tableName: 'users',
        timestamps: false
        //createdAt: 'created_at',
        //updatedAt: 'updated_at',
        //deletedAt: 'delete_at'
    };
    const Users = sequelize.define(alias, cols, config);

return Users
     };