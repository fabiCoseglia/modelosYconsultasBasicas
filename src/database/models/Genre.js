module.exports = (sequelize, dataTypes) =>{

    const alias = 'Genre';
    const cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            
        },
        name:{
            type: dataTypes.STRING(100),
            allowNull : false,
        },
        ranking:{
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            unique: true,
            defaultValue: '1'
        },
        active : {
            type: dataTypes.INTEGER(1),
            allowNull : false,

        }
    }

    const config = {
        tableName: 'genres',
        timestamps: true,
        underscored: true
    }

    const Genre = sequelize.define(alias, cols,config);
    return Genre;
}