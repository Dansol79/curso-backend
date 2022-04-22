/* Consigna: Implementar programa que contenga una clase llamada Contenedor que reciba 
el nombre del archivo con el que va a trabajar e implemente los siguientes métodos:

save(Object): Number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
getById(Number): Object - Recibe un id y devuelve el objeto con ese id, o null si no está.
getAll(): Object[] - Devuelve un array con los objetos presentes en el archivo.
deleteById(Number): void - Elimina del archivo el objeto con el id buscado.
deleteAll(): void - Elimina todos los objetos presentes en el archivo. 
 Aspectos a incluir en el entregable: 
El método save incorporará al producto un id numérico, que deberá ser siempre uno más que el id del último objeto agregado (o id 1 si es el primer objeto que se agrega) y no puede estar repetido.
Tomar en consideración el contenido previo del archivo, en caso de utilizar uno existente.
Implementar el manejo de archivos con el módulo fs de node.js, utilizando promesas con async/await y manejo de errores.
Probar el módulo creando un contenedor de productos, que se guarde en el archivo: “productos.txt”
Incluir un llamado de prueba a cada método, y mostrando por pantalla según corresponda para verificar el correcto funcionamiento del módulo construído. 
El formato de cada producto será : title, precio, id, thumbnail
*/


const fs = require('fs');


class Contenedor {
    constructor(nombreArchivo) {
        this.nombreArchivo = nombreArchivo;
        this.contarID = 1;
        this.productos = [];
        
    }

    async leer(){
        try{
            const contenido = await fs.readFileSync(this.nombreArchivo, 'utf-8');
            this.productos = JSON.parse(contenido);
            
        }catch(error){
           
        }
  }

   async escribir() {
        await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(this.productos));
        
   }
   
    save(object) {
        let id = this.contarID;
        if (this.productos.length > 0) {
            id = this.productos[this.productos.length - 1].id + 1;
        }
        object.id = id;
        this.productos.push(object);
        this.escribir();
        return id;

    }

   async getById(id) {
        await this.leer();
        if(this.productos !== []){
            const producto = this.productos.find(producto => producto.id === id);
            return console.log(producto);
        }else{
            return null;
        }
    }

   async  getAll() {
       await this.leer();
       return this.productos;
    }

    deleteById(id) {
        let resultado
        if(this.productos !== []){
            resultado = this.productos.filter(producto => producto.id !== id);
            this.productos = new Array(resultado);
            this.escribir();
         
        }else{
            console.log('No hay productos');
        }
        return resultado;
      
    }

  deleteAll() {
       this.productos = [];
      
    }

}

module.exports = Contenedor;

