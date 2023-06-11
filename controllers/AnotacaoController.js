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

            const conteudo = req.body.conteudo
            if(!conteudo) {
                return
            } else {
                const anotacao = {
                    conteudo: conteudo
                }
        
                
                await Anotacao.create(anotacao)
            }

    
            res.redirect('/')
        

    }

    static async updateAnotacoes(req, res) {
        const id = req.params.id

        const anotacao = await Anotacao.findOne({ where: { id: id }, raw: true })

        res.render('anotacoes/edit', { anotacao })

    }

    static async updateAnotacoesSave(req, res) {
        const id = req.body.id

        const anotacao = {
            dataCriacao: req.body.dataCriacao,
            conteudo: req.body.conteudo
        }

        await Anotacao.update(anotacao, {where: {id: id}})

        res.redirect('/')
    }

    static async paginaSobre(req, res) {
        res.render('anotacoes/sobre')
    }

    static async deleteAnotacoes(req, res) {
        const id = req.body.id

        await Anotacao.destroy({where: {id: id}})

        res.redirect('/')
    }
}