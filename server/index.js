const fs = require ('fs');
class CRUD { 
    nombreClase = `CRUD`
    constructor(nombreArchivo){
        this.nombreArchivo = nombreArchivo;
    }

    //Guardado de Productos
    async crear(objeto){
        try{
            const leerArchivo = await this.getAll()
            const id = leerArchivo.length === 0 ? 1 : leerArchivo[leerArchivo.length -1].id +1
            objeto.id = id;
            leerArchivo.push(objeto)
            this.writeData(leerArchivo)
            return objeto
        }catch (error) {
            console.log(error)
        }
    }

    // Buscar por ID

    async obtenerPorID(id){
        try {
            const objetos = await this.getAll();
            const objeto = objetos.find(elemento => elemento.id == id);
            return objeto ? objeto : null
        } catch (error) {
            console.log(error)
        }
    }

    // Modificador de Objetos

    async modificador (id, objetoMod){
        try {
            objetoMod["id"] = id
            const elementos = await this.getAll();
            const objeto = elementos.find(elemento=>elemento.id==id)
            if(!objeto)
            throw new Error(`la ID (${id}) que esta buscando no Existe`)
            const elementoModificado = elementos.map(item =>{
                if (item.id == id)
                    return objetoMod
                return item
            })
            this.writeData(elementoModificado)
        } catch (error) {
            console.log(error)
            return {}
        }
    }

    // Metodo GETALL

    async getAll(){
        try {
            const datos = await this.readData(this.nombreArchivo)
            return datos
        } catch (error) {
            return []
            
        }
    }


    // Eliminar un archivo por su ID

    async borrar(id){
        try {
            const objetos = await this.getAll();
            const objetosFiltrado = objetos.filter(elemento => elemento.id != id);
            this.writeData(objetosFiltrado)
        } catch (error) {
            console.log(error)
        }
    }

    // Leer el Archivo con File System y Parsearlo

    readData(path){
        const datos = JSON.parse(fs.readFileSync(path, `utf-8`) || `[]` );
        return datos
    }

    // Escribir el Archivo con File System y Stringifearlo! :-)

    writeData(objeto){
        fs.writeFileSync(this.nombreArchivo, JSON.stringify(objeto, null, 2));
    }
}

module.exports = CRUD;