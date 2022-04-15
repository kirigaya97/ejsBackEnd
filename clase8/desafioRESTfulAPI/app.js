const express = require('express')
const productos = require('./productos.json');
const app = express()
const Contenedor = require('./class.js')
const miContenedor = new Contenedor("productos.json");
//CRUD
/*
create  : crear         ==> post
read    : leer          ==> get
update  : actualizar    ==> put 
delete  : borrar        ==> delete
*/

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/api/productos', ({ query }, res) => {
    // const { query } = req
    console.log(query)
    res.json({ mensaje: productos })
})

app.get('/api/::id', ({ params }, res) => {
    // const { params } = req
    console.log(params.id)
    console.log(typeof(params.id))

    const id = parseInt(params.id)
    
    let index = miContenedor.getById(id)
    console.log('INDEX: ',index)
    console.log(id)
    if (isNaN(id)) {
        return res.json({ error: 'El parámetro ingresado no es un número' })
    }

    if (id < 1 || id > productos.length) {
        return res.json({ error: 'El parámetro está fuera de rango' })
    }
    res.json({producto: productos[id-1]})
})

app.post('/', ({ body }, res) => {
    // const { body } = req
    console.log(body)
    res.json({ mensaje: 'recibí una petición con método "post"' })
})

app.put('/:id', ({ body, params }, res) => {
    // const { body, params } = req
    console.log(params, body)
    res.json({ mensaje: 'recibí una petición con método "put"' })
})

app.delete('/:id', ({ params }, res) => {
    // const { params } = req
    console.log(params)
    res.json({ mensaje: 'recibí una petición con método "delete"' })
})

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))
