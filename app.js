const express = require('express')
const bodyParser = require('body-parser')

const app = express()

//archivos de rutas
const rentaRouter = require('./routes/renta')
const clientRouter = require('./routes/client')


app.use(bodyParser.json({
  limit: '100mb'
}))

app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(bodyParser.json())

//cors

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, Access-Control-Allow-Origin');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
})

//rutas
app.use('/api-renta', rentaRouter)
app.use('/api-renta', clientRouter)


module.exports = app;