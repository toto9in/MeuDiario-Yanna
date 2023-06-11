const express = require('express')
const router = express.Router()
const AnotacaoController = require('../controllers//AnotacaoController')

router.get('/', AnotacaoController.showAnotacoes)
router.get('/add', AnotacaoController.createAnotacoes)
router.post('/add', AnotacaoController.createAnotacoesSave)
router.post('/delete', AnotacaoController.deleteAnotacoes)
router.get('/edit/:id', AnotacaoController.updateAnotacoes)
router.post('/edit', AnotacaoController.updateAnotacoesSave)
router.get('/sobre', AnotacaoController.paginaSobre)

module.exports = router