const fs = require('fs');

let ultimoid = 0

class Contenedor{
    constructor (ruta){
        this.ruta = ruta,
        this.productos = []
    }

    async save(obj){
        
        obj.id = (ultimoid+1)
        ultimoid++;
        this.productos.push(obj)
        const string = JSON.stringify(obj)
        await fs.appendFileSync(this.ruta, (string + '\n') , "UTF-8",{'flags': 'a+'}); 
       // fs.promises.writeFile('Productos.txt', string)
        
        return console.log('Guarde el objeto ' + obj.title + ' ID: ' + obj.id);
    }

    getById(num){

        
    }

    getAll(){

    }

    deleteById(){

    }

    deleteAll(){

    }
}

const productos = new Contenedor('Productos.txt');

console.log(typeof productos)

console.log(productos);

console.log(productos.save);

productos.save({title:"Cajita", price:250, thumbnail:"https://www.distribuidorapop.com.ar/wp-content/uploads/2020/08/picador-acrilico-mini-colores-precios.jpg"})
productos.save({title:"Puerta", price:526, thumbnail:"https://www.distribuidorapop.com.ar/wp-content/uploads/2020/08/picador-acrilico-mini-colores-precios.jpg"})
productos.save({title:"Pato", price:287, thumbnail:"https://www.distribuidorapop.com.ar/wp-content/uploads/2020/08/picador-acrilico-mini-colores-precios.jpg"})
productos.save({title:"Corneta", price:652, thumbnail:"https://www.distribuidorapop.com.ar/wp-content/uploads/2020/08/picador-acrilico-mini-colores-precios.jpg"})
productos.save({title:"Guitarra", price:8026, thumbnail:"https://www.distribuidorapop.com.ar/wp-content/uploads/2020/08/picador-acrilico-mini-colores-precios.jpg"})

console.log('ID Actual: ' + ultimoid);