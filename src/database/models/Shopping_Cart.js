module.exports = (sequelize, dataTypes) => {
    let alias = 'Shopping_Cart';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        
        id_user: {
            type: dataTypes.BIGINT(10),
            allowNull: false
        },
        id_product: {
            type: dataTypes.BIGINT(10),
            allowNull: false
        },
        cantidad: {
            type: dataTypes.DECIMAL(3,1),
            allowNull: false
        },
        fecha_compra: {
            type: dataTypes.DATE,
            allowNull: false
        },
        valor_unitario:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        valor_total:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        
    };
    let config = {
        tableName: 'shopping_cart',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'delete_at'
    };
    const Shopping_Cart = sequelize.define(alias, cols, config);

return Shopping_Cart;
     };