// const {Router} = require (`express`);
const {Router, Request, Response} = require(`express`);
const apiRoutes = Router();

// Creo el array con un producto standard
const productos = [
    {
        title: "nombre",
        price: "precio",
        thumbnail: "foto del producto en URL",
        id: 0
    }
]

// metodo get para obtener los productos del array
apiRoutes.get(`/api/productos`, (req, res)=>{
    const datos = {
        title : productos.title,
        price: productos.price,
        thumbnail: productos.thumbnail
    }
        res.render(`listaProductos`);
})

// metodo get para obtener por el ID
apiRoutes.get(`/api/productos/:id`,(req, res)=>{
    const {id} = req.params;
    const elemento = productos.find((elemento)=>elemento.id==id)
    res.send(elemento == undefined ? "producto no encontrado" : elemento) 
})

// metodo para eliminar un producto
apiRoutes.delete(`/api/deletle/:id`, (res, req)=>{
    const {id} = req.params.id;
    const producto = req.body
    objeto.id = parseInt(id)
    const elemento = productos.find((elemento)=>elemento.id==id)
    const killElemento = elemento == undefined ? `el producto a eliminar esta en narnia` : productos.splice(id/1, 1)
    res.send(killElemento)
})

// metodo para crear productos
apiRoutes.post("/api/productos", (req,res)=>{
    const elemento = req.body
    const id = productos.length === 0 ? 1 : productos[productos.length -1].id + 1;
    elemento.id = id
    productos.push(elemento);
    res.status(200).send(`Producto agregado de forma satisfactoria`);
})

// modificar un producto
apiRoutes.put(`/api/productos/:id`, (req, res)=>{
    const id = req.params.id
    const objeto = req.body
    objeto.id = parseInt(id)
    const elemento = productos.find((elemento)=>elemento.id==id)
    const modElemento = elemento == undefined ? `El producto a modificar fue destruido por el Imperop` : productos.splice(id-1, 1, objeto)
    res.send(modElemento)
})

module.exports = apiRoutes;