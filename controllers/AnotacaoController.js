const Anotacao = require('../models/Anotacao')


//todo
//FAZER A PAGINA DE ADICIONAR ANOTACAO
//FAZER A PAGINA DE EDITAR ANOTACAO


module.exports = class AnotacaoController {
    //showAnotacoes feita
    static async showAnotacoes(req, res) {
        const anotacao = await Anotacao.findAll({raw: true})
        res.render('anotacoes/all', { anotacao })
    }

    static async createAnotacoes(req, res) {
        res.render('anotacoes/create')
    }

    static async createAnotacoesSave(req, res) {

    }
}