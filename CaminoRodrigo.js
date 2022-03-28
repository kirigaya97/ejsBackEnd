
class Usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    
    getFullName(){
        return `${this.nombre} ${this.apellido}`
    }

    addMascota(mascota){
        this.mascotas.push(mascota);
    } 

    addBook(titulo, autor){
        this.libros.push({titulo, autor});
    }

    countMascotas(){
        return usuario.mascotas.length;
    }

    getBookNames(){
        let aux = [];
        usuario.libros.forEach(libro => {
            aux.push(libro.titulo);
        });
        return aux
    }
};

// ============================================================================
//                        Generar Usuarios                                        
// ============================================================================
const usuario = new Usuario("Julian", "Sanchez", [{titulo: 'Magia grande para manos pequeñas', autor:'un Mago'}, {titulo: 'Cartoficciones', autor:'Pit Harling'}], ['Perro', 'Gato']);

// ============================================================================
//                          METODOS ADD                                        
// ============================================================================
usuario.addMascota("Loro");
usuario.addMascota("Tigre");
usuario.addMascota("Leon");
usuario.addMascota("Tiburón");

// ============================================================================
//                          METODOS ADD                                        
// ============================================================================
usuario.addBook("20.000 leguas de viaje submarino", "Julio Verne");
usuario.addBook("Técnica Cartomagica Avanzada", "Huggard & Braue");
usuario.addBook("Cartomagia Fundamental", "Vicente Canuto");
usuario.addBook("Diseño de Milagros", "Darwin Ortiz");


// ============================================================================
//                                CONSOLE LOGS                                        
// ============================================================================
console.log(usuario);
console.log("Full Name: " + usuario.getFullName());
console.log("Book Names: " + usuario.getBookNames());
console.log("Cuenta mascotas " + usuario.countMascotas());
console.log("El tipo de nombre es" + " " + typeof usuario.nombre);
console.log("El tipo de Apellido es" + " " + typeof usuario.apellido);
console.log("El tipo de mascotas es" + " " + typeof usuario.mascotas);
console.log("El tipo de libros es" + " " + typeof usuario.libros);


