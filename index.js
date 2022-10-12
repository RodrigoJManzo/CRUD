const express = require(`express`)
const {create} = require (`express-handlebars`)

const indexRoutes = require (`./routes/index`);
const taskRoutes = require (`./routes/tasks`)

const app = express();
const PORT = process.env.PORT || 8080

const hbs = create({
    extname: `.hbs`,
    helpers:{
        
    }
});

app.engine(`.hbs`, hbs.engine)
app.set(`view engine`, `.hbs`)
app.set(`views`, `./views`)
app.use(express.static(`public`))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(`/`, indexRoutes)
app.use(`/tasks`, taskRoutes)

app.listen(PORT, ()=>{
    console.log(`Servidor iniciado correctamente en Puerto ${PORT}`)
})