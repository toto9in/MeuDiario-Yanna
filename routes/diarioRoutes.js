const express = require('express')
const router = express.Router()
const AnotacaoController = require('../controllers//AnotacaoController')

//IMPORTAR CONSTROLER
//ADICIONAR ROTA DE EDIT
router.get('/', AnotacaoController.showAnotacoes)
//router.get('/add', ADICIONARANOTACAO)
//router.post('/add', SALVARANOTACAO)

module.exports = router