
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
        return this.mascotas.length;
    }

    getBookNames(){
        let aux = [];
        this.libros.forEach(libro => {
            aux.push(libro.titulo);
        });
        return aux
    }
};

// ============================================================================
//                        Generar Usuarios                                        
// ============================================================================
const usuario0001 = new Usuario("Julian", "Sanchez", [{titulo: 'Magia grande para manos pequeñas', autor:'un Mago'}, {titulo: 'Cartoficciones', autor:'Pit Harling'}], ['Perro', 'Gato']);
const usuario0002 = new Usuario('Damián', 'Jimenez', [{titulo:'TAO TE KING', autor:'LAO TSE'},{titulo:'Numismagia & Percepción', autor:'Miguel Angel Gea'}],['Iguana', 'Caballo']);
const usuario0003 = new Usuario('Peter', 'Languila', [{titulo:'S3rp1ent3', autor:'Lord Valdomero'},{titulo:'Quiropraxia for Dummys', autor:'Gold Handed Moe'}],['Serpiente', 'Axolotl']);
// ============================================================================
//                          METODOS ADD                                        
// ============================================================================
usuario0001.addMascota("Loro");
usuario0001.addMascota("Tigre");
usuario0002.addMascota("Leon");
usuario0002.addMascota("Tiburón");


// ============================================================================
//                          METODOS ADD                                        
// ============================================================================
usuario0001.addBook("20.000 leguas de viaje submarino", "Julio Verne");
usuario0002.addBook("Técnica Cartomagica Avanzada", "Huggard & Braue");
usuario0001.addBook("Cartomagia Fundamental", "Vicente Canuto");
usuario0002.addBook("Diseño de Milagros", "Darwin Ortiz");
usuario0003.addBook("Lower & Middle back yoga", "Pepito Road");
usuario0003.addBook("Thin Flow", "Spaghetti Jack");


// ============================================================================
//                                CONSOLE LOGS                                        
// ============================================================================

function getUsuario(usuario){
    console.log('Hola! Estos son los datos de ' + usuario.nombre)
    console.log(usuario);
    console.log("Full Name: " + usuario.getFullName());
    console.log("Book Names: " + usuario.getBookNames());
    console.log("Cuenta mascotas " + usuario.countMascotas());
    console.log("El tipo de nombre es" + " " + typeof usuario.nombre);
    console.log("El tipo de Apellido es" + " " + typeof usuario.apellido);
    console.log("El tipo de mascotas es" + " " + typeof usuario.mascotas);
    console.log("El tipo de libros es" + " " + typeof usuario.libros);
}

getUsuario(usuario0001);
console.log('AHÍ VA EL SEGUNDO!')
getUsuario(usuario0002);
console.log('AHÍ VA EL TERCERO!')
getUsuario(usuario0003);


/* console.log(usuario0001);
console.log("Full Name: " + usuario.getFullName());
console.log("Book Names: " + usuario.getBookNames());
console.log("Cuenta mascotas " + usuario.countMascotas());
console.log("El tipo de nombre es" + " " + typeof usuario.nombre);
console.log("El tipo de Apellido es" + " " + typeof usuario.apellido);
console.log("El tipo de mascotas es" + " " + typeof usuario.mascotas);
console.log("El tipo de libros es" + " " + typeof usuario.libros); */


