const express = require('express');
const exphbs = require('express-handlebars');

const app = express()

const conn = require('./db/conn')

const Anotacao = require('./models/Anotacao')

const diarioRoutes = require('./routes/diarioRoutes')

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(express.json())

app.use(express.static('public'))
//MIDLEWARE ROUTES


app.use('/', diarioRoutes)

conn.sync().then(() => {
    app.listen(3000)
    console.log('SERVER INICIADO NA PORTE: 3000')
})
.catch((err) => console.log(err))