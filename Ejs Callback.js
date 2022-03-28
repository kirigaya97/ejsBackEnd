const delay = ret =>{for(let i=0; i<ret*3e6; i++);}
function mostrarLetras(palabra, num){
    console.log('Inicio del programa')
    /* setInterval(mostrarLetras, num) */
    for (let i = 0; i < palabra.length; i++) {
        console.log(palabra[i]);
        delay(num)
    }
    
    console.log('Fin del programa');
    
}
mostrarLetras('Hola',200); 

const delay2 = ret =>{for(let i=0; i<ret*3e6; i++);}

function hacerTarea(num){
    console.log('Haciendo tarea ' + num)
    delay(500)
}

console.log('Haciendo Tareas....');
hacerTarea(1)
hacerTarea(2)
hacerTarea(3)
hacerTarea(4)
console.log('fin de tareas')
console.log('Otras tareas...');


function hacerTarea2(num, cb){
    console.log('Haciendo Tarea ' + num)
    setTimeout(cb, 100)
}

console.log('inicio de tareas');
hacerTarea2(1, () => {
    hacerTarea2(2,()=>{
        hacerTarea2(3,()=>{
            hacerTarea2(4,()=>{
                console.log('fin de Tareas...')
            })
        })
    })
})

console.log('otras tareas');