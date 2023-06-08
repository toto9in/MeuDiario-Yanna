const Anotacao = require('../models/Anotacao')


//todo
//FAZER A PAGINA DE ADICIONAR ANOTACAO
//FAZER A PAGINA DE EDITAR ANOTACAO


module.exports = class AnotacaoController {
    //showAnotacoes feita
    static async showAnotacoes(req, res) {
        const anotacao = await Anotacao.findAll({raw: true, order: [['createdAt', 'DESC']]}) //o primeiro eh o ultimo criado
        res.render('anotacoes/all', { anotacao })
    }

    static async createAnotacoes(req, res) {
        res.render('anotacoes/create')
    }
    //FUNCAO ja ta pronta falta arrumar a interface no front(ja feita as atualizacoes)
    static async createAnotacoesSave(req, res) {

        const anotacao = {
            conteudo: req.body.conteudo
        }

        await Anotacao.create(anotacao)

        res.redirect('/')
    }
}