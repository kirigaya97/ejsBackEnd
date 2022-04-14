const fs = require("fs");

module.exports = class Contenedor {
  constructor(nombreArchivo) {
    this.nombreArchivo = nombreArchivo;
  }

  async save(producto) {
    const data = await fs.promises.readFile(this.nombreArchivo, "utf-8"); //Leer productos.json
    const productos = JSON.parse(data); //Convertir a objeto
    //Asignarle un ID
    let id;
    if(producto.id) id = producto.id; // Checkea si el producto tiene id, si tiene, lo respeta.
    else if (productos.length === 0)
      id = 1; // Si el array productos.json esta vacío o el último objeto no tiene id, asignar 1.
    else id = productos[productos.length - 1].id + 1; // Sino, asignar el ID del ultimo producto + 1.
    console.log("============================================");
    console.log("| El ID del producto que ingresaste es:", id, "|"); // Retornar ID
    console.log("============================================");

    //construir nuevo producto
    const productoNuevo = {
      id: id,
      nombre: producto.nombre,
      precio: producto.precio,
      thumbnail: producto.thumbnail,
    };

    productos.push(productoNuevo);

    let stringy = JSON.stringify(productos); //Stringify
    await fs.promises.writeFile(this.nombreArchivo, stringy, null, "\t"); //Escribirlo en el JSON
    
  }

  async getById(id) {
    const data = await fs.promises.readFile(this.nombreArchivo, "utf-8"); //Leer productos.json
    const productos = JSON.parse(data); //Convertir a objeto

    const indice = productos.findIndex((producto) => {
      if (producto.id === id) return true;
      else return false;
    });

    if (indice === -1) return null;

    console.log("      ==============================================");
    console.log("      |↓↓↓↓↓↓↓     PRODUCTO CON ID: "+id+"      ↓↓↓↓↓↓↓|"); // Productos
    console.log("      ==============================================");

    console.log(productos[indice]);

    return productos[indice];
  };

  async getAll(){
    const data = await fs.promises.readFile(this.nombreArchivo, "utf-8"); //Leer productos.json
    const productos = JSON.parse(data); //Convertir a objeto

    console.log("      ============================================");
    console.log("      |↓↓↓↓↓↓↓     TUS PRODUCTOS SON      ↓↓↓↓↓↓↓|"); // Productos
    console.log("      ============================================");
    console.log(productos);

    return productos;
  }

  async deleteById(id){
    const data = await fs.promises.readFile(this.nombreArchivo, "utf-8"); //Leer productos.json
    const productos = JSON.parse(data); //Convertir a objeto

    const indice = productos.findIndex((producto) => {
        if (producto.id === id) return true
        else return false;
      });


      if (indice === -1) {
        console.log("      ============================================");
        console.log("      |¡¡¡¡¡¡¡      ESTE ID NO EXISTE      !!!!!!|"); // Eliminando
        console.log("      ============================================");;
        return null
        };


      console.log("      ============================================");
      console.log("      |↓↓↓↓↓↓↓     ELIMINANDO PRODUCTO     ↓↓↓↓↓↓|"); // Eliminando
      console.log("      ============================================");


      console.log(productos[indice]);
      productos.splice(indice, 1);

      let stringy = JSON.stringify(productos); //Strigify
      await fs.promises.writeFile(this.nombreArchivo, stringy, null, "\t");


      console.log("      ============================================");
      console.log("      |↑↑↑↑  PRODUCTO ELIMINADO EXITOSAMENTE  ↑↑↑↑|"); // Eliminado
      console.log("      ============================================");
  }

  async deleteAll(){

      console.log("      ====================================");
      console.log("      |☠☠☠☠☠☠   VACIANDO ARCHIVO   ☠☠☠☠☠ |"); // Eliminando
      console.log("      ====================================");

      let stringy = JSON.stringify([]); //Strigify
      await fs.promises.writeFile(this.nombreArchivo, stringy, null, "\t");

      console.log("      ============================================");
      console.log("      |↑↑↑↑   ARCHIVO VACIADO EXITOSAMENTE   ↑↑↑↑|"); // Eliminado
      console.log("      ============================================");
  }
}
