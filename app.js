const Contenedor = require('./contenedor');

const contenedor1 = new Contenedor('productos.json');




contenedor1.save({
    title: 'El Alquimista',
    precio: 90,
    thumbnail: 'https://via.PabloCohelo.com/250'
});
contenedor1.save({
    title: 'El Alquimista',
    precio: 90,
    thumbnail: 'https://via.PabloCohelo.com/250'
});
contenedor1.save({
    title: 'Harry Potter',
    precio: 120,
    thumbnail: 'https://via.HarryPotter.com/100'
});
contenedor1.save({
    title: 'El Señor de los Anillos',
    precio: 300,
    thumbnail: 'https://via.placeholder.com/250'
});
contenedor1.save({
    title: 'El Hobbit',
    precio: 200,
    thumbnail: 'https://via.placeholder.com/100'
});
contenedor1.save({
    title: 'El libro de la selva',
    precio: 200,
    thumbnail: 'https://via.placeholder.com/100'
});
contenedor1.leer('productos.txt');

// console.log(contenedor1.productos);
// contenedor1.getById(2);
// console.log(contenedor1.getById(2));
// console.log(contenedor1.getAll());
// contenedor1.deleteById(1);
// console.log(contenedor1.productos);
contenedor1.deleteAll();
console.log(contenedor1.productos);



 


