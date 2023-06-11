const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Anotacao = db.define('Anotacao', {

    dataCriacao: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    conteudo: {
        type: DataTypes.TEXT('medium'),
         allowNull: false
     }
    
})

module.exports = Anotacao