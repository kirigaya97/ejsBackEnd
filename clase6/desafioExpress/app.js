const express = require('express');
const productos = require('./productos.json');

const app = express()

app.get('/', (req, res) => {
    res.send('ok')
})

app.get('/productos', (req, res) => {
    res.send(JSON.stringify(productos))
})

app.get('/productoRandom', (req, res) => {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      let max = productos.length
     let random = getRandomInt(0,max)
    res.send(
        productos[random]
    )
})



const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))
