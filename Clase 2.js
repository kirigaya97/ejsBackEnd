/* function sumar(a, b) {
    return a + b
};


console.log(sumar (4,5));

let arrow = ()=> 2+3;

console.log(arrow);

function ppp(n) {
    return n+1
};

let a = 5
let b = 6

if (a<b) {
    "a es menor que B"
} else {
    "b es menor que A"
}



function crearSaludar() {
    return function(nombre){console.log("Hola", nombre, "!")}
}

const saludar = crearSaludar();

saludar("Rodrigo");


function ejecutarMuchasVeces(cantVeces, fnAEjecutar) {
    for (let i = 0; i < cantVeces; i++) {
        fnAEjecutar()
    }
};

function mostrarFecha() { 
    console.log(Date.now()) 
}


function ejecutarParaCadaArg(fn, vals) {
    for (const val of vals) {
        fn(val)
    }
}

ejecutarParaCadaArg(console.log, [1,2,3,4,5])


const col = [1,2,3,4,5];

for (const num of col) {
    console.log(num+10)
}

for (const num in col) {
    console.log(num[0])
} */

/* const diccionario = {
    nombre:"Rodrigo",
    rol: "Estudiante",
    Edad:25,
    colorFavorito: "rojo"
}

const letras = [a,b,c];

const [ primeraLetra, segundaLetra , terceraLetra ] = letras

const { nombre } = diccionario

console.log(nombre);


function dividir(dividendo, divisor) {
    if(divisor === 0) {
        throw new Error('no se puede dividir por 0')
    }
    return dividendo / divisor
}

const resultado = dividir(4,2);

fetch('http://jsonplaceholder.typicode.com/posts/1').then(res => res-JSON())


fetch('http://jsonplaceholder.typicode.com/posts/1')
    .then(function (res) {
        return res.json()
    })
    .then(function(obj) {
        console.log(obj)
    })
 */


    class Persona{
        constructor(nombre, apellido, libros, mascotas){
            this.nombre = nombre;
            this.apellido = apellido;
            this.libros = [];
            this.mascotas = [];
        }
        
        addMascota(nombre, raza){
            this.mascotas.push (
                nombre = nombre,
            )

        } 

        addLibro(titulo, autor){
            this.libros.push({
                titulo : titulo,
                autor : autor,
            })
        }

        saludar(nombre, apellido){
            console.log("Hola", nombre, apellido, "¿Como estás?")
        }

    
    }
    const julian = new Persona("Julian", "Suarez", {}, []);

    julian.saludar(julian.nombre, julian.apellido);

    julian.addMascota("Copo de nieve");
    julian.addMascota("Jesusito");
    julian.addMascota("Ricardito");
    julian.addLibro("Un viaje", "tu mama");
    julian.addLibro("Otro viaje", "tu hermana");
    julian.addLibro("Otro viaje más", "tu tía");


   


    /* Persona.libros("20000 leguas de viaje submarino", "Julio Verne");
    Persona.mascotas("Copo de nieve"); */

    console.log(julian);


    const ricardo = new Persona("Ricardo", "Gomez")
    ricardo.addLibro("Un viaje tremendo", "Dai Vernon");
    ricardo.addLibro("Un viaje tremendo 2", "Dai Vernon & Co");
    ricardo.addMascota("Viviana");
    ricardo.addMascota("Pancera");


    console.log(ricardo);

    console.log(ricardo.libros);
    

    