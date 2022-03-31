const fs = require('fs');

const id = fs.readFile("Productos.json", "utf8", (err, jsonString) => {
    if (err) {
      console.log("Error leyendo el archivo del disco: ", err);
      return;
    }
    try {
      const productos = JSON.parse(jsonString);
      //console.log("EL ID ES: (Console log desde readFile) ", productos.employees.length + 1);
      //return (productos.employees.length + 1);
    } catch (err) {
      console.log("Error parsing JSON string:", err);
    }
  });


  console.log(id);

  console.log('EL ID ES: '+ id);

  

  //Object.keys(productos).length