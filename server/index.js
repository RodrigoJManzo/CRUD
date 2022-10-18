const express = require(`express`)
const {create} = require (`express-handlebars`)

const app = express();
const PORT = process.env.PORT || 8080

const hbs = create({
    extname: `.hbs`,
});
app.engine(`.hbs`, hbs.engine)

app.set(`view engine`, `.hbs`)
app.set(`views`, `../views`)
app.use(express.static('public'))

const indexRoutes = require (`../routes/index`)
const apiError = require (`../routes/apiError.js`)
app.use(`/`, indexRoutes)

app.use(`/error/`, apiError)
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.listen(PORT, ()=>{
    console.log(`Servidor iniciado correctamente en Puerto ${PORT}`)
})




