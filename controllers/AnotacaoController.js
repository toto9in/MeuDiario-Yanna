const Anotacao = require('../models/Anotacao')


//todo
// FAZER RETORNAR A PAGINA COM TODAS AS ANOTACOS
//FAZER A PAGINA DE ADICIONAR ANOTACAO
//FAZER A PAGINA DE EDITAR ANOTACAO
module.exports = class AnotacaoController {
    static async showAnotacoes(req, res) {
        //const anotacao = await Anotacao.findAll({raw: true})
        res.end('ola yanna')
    }
}