module.exports = (sequelize, dataTypes) => {
    let alias = 'Unidad_Medida';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        nombre: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
       
        
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'delete_at'
    };
    const Unidad_Medida = sequelize.define(alias, cols, config);




    return Unidad_Medida;
     };