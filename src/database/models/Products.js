module.exports = (sequelize, dataTypes) => {
    let alias = 'Products';
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
        descripcion: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        uom: {
            type: dataTypes.DECIMAL(3,1),
            allowNull: false
        },
        id_categoria: {
            type: dataTypes.BIGINT(10),
            allowNull: false
        },
        precio:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        image:{
            allowNull: false
        }
        
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'delete_at'
    };
    const Products = sequelize.define(alias, cols, config);

return Products
     };