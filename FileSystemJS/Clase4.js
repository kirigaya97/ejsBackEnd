const fs = require('fs');

/* fs.promises.writeFile('prueba.txt', 'probando...'.repeat(30_000_000))
    .then(()=> fs.promises.readFile('prueba.txt', 'utf-8'))
    .then((datos) => console.log(datos))
    .catch((err) => console.log(err))
    .finally(   () =>   {console.log('terminé') }   ) */

async function trabajarConArchivos() {
    await fs.promises.writeFile('test.txt', 'Probando...'.repeat(300))
    try {
        const datos = await fs.promises.readFile('test.txt', 'utf-8')
        console.log(datos)
    } catch (error) {
        console.log(error)
    } finally {
        console.log('terminé')
    }
    
}
    

async function leerArchivos() {
    await fs.promises.readFile('test.txt', 'utf-8')
    try {
        const datos = await fs.promises.readFile('test.txt', 'utf-8')
        console.log(datos)
    } catch (error) {
        console.log(error)
    } finally {
        console.log('terminé')
    }
    
}

    leerArchivos()   
    console.log(10 + 10);


/* node D:\Boludeces Nerds\CoderHouse 2022\Back-End\File System\Clase4.js */