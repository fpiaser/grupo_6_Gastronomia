module.exports = (sequelize, dataTypes) => {
    let alias = 'Categoria';
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
    const Categoria = sequelize.define(alias, cols, config);

    Categoria.associate = function(models){

        Categoria.hasMany(models.Products,{
            as:'Products',
            foreignKey: 'id_categoria'
        })
    }

    return Categoria;

     };