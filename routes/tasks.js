const {Router} = require (`express`);
const router = Router();
const CRUD = require(`../server/index`)
const tareas = new CRUD (`baseDeDatos.txt`)

router.get(`/productos`, async(req, res)=>{
    const task = await tareas.getAll()
    res.render(`tasks/productos`, {task
    })
})

router.get(`/productos/:id`, async (req, res)=>{
    try {
        const {id} = req.params;
        const tarea = await tareas.obtenerPorID(id)
        return res.render(`tasks/pordID`)
    } catch (error) {
        console.log(error)
    }
    
})

router.get(`/deletle/:id`, async (res, req)=>{
    const {id} = req.params;
    await tareas.deletle(id)
    res.redirect(`/tasks/productos`)
})

router.post(`/create`, async (req,res)=>{
    try {
        const { title, price, thumbnail} = req.body;
        await tareas.create({title, price, thumbnail})
        const formInfo={
            botonName:"Crear",
            metodo:"POST",
            url:"/tasks/create"}
        res.redirect(`/tasks/prodID`);
    } catch (error) {
        console.log(`error ${error} al crear el nuevo producto`)
    }
})

router.put(`/update/:id`, async (req, res)=>{
    try {
        const {id} = req.params;
        const {title, price, thumbnail} = req.body;
        await tareas.modify(id,{title, price, thumbnail })
        const formInfo={
            botonName:"Actualizar",
            metodo:"POST",
            url:"/tasks/update/"+id
          }
        res.redirect(`/tasks/formulario`)
    } catch (error) {
        console.log(`no se pudo modificar el producto ${error}`)
    }
})

module.exports = router;