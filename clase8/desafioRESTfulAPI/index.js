var Contenedor = require('./class.js')

const miContenedor = new Contenedor("productos.json");

const objeto0001 = {
  nombre: "Bicycle Playing Cards",
  precio: 670,
  thumbnail: "https://www.ubuy.vn/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODF6M0t5a01zZ0wuX0FDX1NMMTUwMF8uanBn.jpg",
};

const objeto0002 = {
    nombre: "Phoenix Playing Cards",
    precio: 890,
    thumbnail: "https://i.ebayimg.com/images/g/4goAAOSwY~1aPXSZ/s-l1600.jpg",
};

const objeto0003 = {
   nombre: "Aviator Playing Cards",
   precio: 550,
   thumbnail: "https://cdn.shopify.com/s/files/1/0480/5473/0903/products/Aviator_a3a75e98-a86a-4a07-8b0e-c8fed03ed50b_2048x2048.jpg?v=1621225290",
};

const objeto0004 = {
   id: 12,
   nombre: "Bee Playing Cards",
   precio: 1200,
   thumbnail: "https://m.media-amazon.com/images/I/813yTqy94sL._AC_SL1454_.jpg",
};

const objeto0005 = {
    nombre: "Karnival Hornets Playing Cards",
    precio: 1200,
    thumbnail: "https://cdn.shopify.com/s/files/1/1788/4029/products/img486_eb641796-4000-41f6-810e-bb6c079af5c1_grande.jpg?v=1576803432",
};

 //===============================================================
 //  CUANDO QUIERO AÑADIR VARIOS OBJETOS, TOMA SOLO EL ÚLTIMO. ¿?
 //===============================================================

    //miContenedor.save(objeto0001);
    //miContenedor.save(objeto0002);
    //miContenedor.save(objeto0003);
    //miContenedor.save(objeto0004);
    //miContenedor.save(objeto0005);




console.log("UN OBJETO");
/* miContenedor.getById(1);
console.log("OTRO OBJETO"); */
miContenedor.getById(12);
/* console.log("OTRO OBJETO");
miContenedor.getById(4); */

//miContenedor.getAll();

// miContenedor.deleteById(12);

// miContenedor.deleteAll();