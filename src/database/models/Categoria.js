module.exports = (sequelize, dataTypes) => {
    let alias = 'Categoria';
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
        tableName: 'categoria',
        timestamps: false/*,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'delete_at'*/
    };
    const Categoria = sequelize.define(alias, cols, config);

    Categoria.associate = function(models){

        Categoria.hasMany(models.Products,{
            as:'products',
            foreignKey: 'id_categoria'
        })
    }

    return Categoria;

     };