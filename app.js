const express = require('express')
const config = require('./configuration/config')
const peliculasRoute = require('./routes/pelicula.route')
const app = express()
require('./database/connection')

//Middlewares
app.use(express.json()) // Se utiliza para poder interpretar JSON
app.use('/api/peliculas', peliculasRoute)

app.listen(config.PORT, ()=>{
    console.log(`API corriendo por el puerto : ${config.PORT}`)
})