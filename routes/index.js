const {Router, Request, Response} = require(`express`);

const indexroutes = Router();


const productos = [{
    title: `test`,
    price: `test`,
    thumbnail: `test`,
    id:0
}]

//index

indexroutes.get(`/`, (req, res)=>{
    res.render(`index`)
})

// metodo get para obtener los productos del array
indexroutes.get(`/productos`, (req, res)=>{
    return res.render(`listaProductos`, productos);
    })

// metodo get para obtener por el ID
indexroutes.get(`/productos/:id`,(req, res)=>{
    const {id} = req.params;
    const elemento = productos.find((elemento)=>elemento.id==id)
    return res.render(`listaProductos`, elemento) 
})

// metodo para eliminar un producto
indexroutes.delete(`/productos/deletle`, (res, req)=>{
    const {id} = req.body
    const elemento = productos.find((elemento)=>elemento.id==id)
    const killElemento = productos.splice(id/1, 1)
    return res.render(`listaProductos`,killElemento)
})

// metodo para crear productos
indexroutes.post("/productos", (req,res)=>{
    const elemento = req.body
    const id = productos.length === 0 ? 1 : productos[productos.length -1].id + 1
    elemento.id = id
    productos.push(elemento);
    return res.render(`listaProductos`, productos)
})

// modificar un producto
indexroutes.put(`/productos`, (req, res)=>{
    const id = req.params.id
    const objeto = req.body
    objeto.id = parseInt(id)
    const elemento = productos.find((elemento)=>elemento.id==id)
    const modElemento = productos.splice(id-1, 1, objeto)
    return res.render(`listaProductos`,modElemento)
})


module.exports = indexroutes;
