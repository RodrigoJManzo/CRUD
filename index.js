const express = require(`express`)
import { router } from `./routes/api`;


const app = express();
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.listen(PORT, ()=>{
    console.log(`Servidor iniciado correctamente en Puerto ${PORT}`)
})



const apiRouter = router
app.use(`/`, apiRouter)

app.use(`/formulario`, express.static(`public`))
