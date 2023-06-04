const express = require('express');
const exphbs = require('express-handlebars');

const app = express()

//TODO IMPORTAR MODULO DO BANCO (FEITO)
const conn = require('./db/conn')


//TODO IMPORTAR MODELS (FEITO)
const Anotacao = require('./models/Anotacao')
//TODO IMPORTAR ROUTES
const diarioRoutes = require('./routes/diarioRoutes')
//SETAR HANDLEBARS
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
//SETAR JSON
app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(express.json())

//SETAR PASTA PUBLIC

//MIDLEWARE ROUTES


app.use('/', diarioRoutes)

conn.sync().then(() => {
    app.listen(3000)
    console.log('SERVER INICIADO NA PORTE: 3000')
})
.catch((err) => console.log(err))