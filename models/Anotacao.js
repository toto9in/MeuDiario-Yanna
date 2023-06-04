const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Anotacao = db.define('Anotacao', {
    conteudo: {
        type: DataTypes.STRING,
         allowNull: false
     }
    
})

module.exports = Anotacao