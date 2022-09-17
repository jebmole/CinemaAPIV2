const express = require('express')
const config = require('./configuration/config')
const peliculasRoute = require('./routes/pelicula.route')
const tokenRoute = require('./routes/token.route')
const jwtMiddleware = require("./middlewares/jwt.middleware")
const app = express()

//Middlewares
app.use(express.json()) // Se utiliza para poder interpretar JSON

app.use('/api/token', tokenRoute)
app.use('/api/peliculas', jwtMiddleware , peliculasRoute)

app.listen(config.PORT, ()=>{
    console.log(`API corriendo por el puerto : ${config.PORT}`)
})