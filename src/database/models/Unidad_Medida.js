module.exports = (sequelize, dataTypes) => {
    let alias = 'Unidad_Medida';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        
        nombre: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
       
        
    };
    let config = {
        tableName: 'unidad_medida',
        timestamps: false,
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',
        // deletedAt: 'delete_at'
    };
    const Unidad_Medida = sequelize.define(alias, cols, config);

    Unidad_Medida.associate = function(models){

        Unidad_Medida.hasMany(models.Products,{
            as:'products',
            foreignKey: 'uom'
        })
    }


    return Unidad_Medida;
     };