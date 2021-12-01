import express from 'express'
import {agergarConstacto,obtenerContactos,borrarContacto} from './src/mysql_conector.js'
let todos
const app = express()

app.listen('8080', function(){
    console.log('aplicacion iniciada en el puerto 8080')
})

//configuracion 
app.set('views', './vistas')
app.set('view engine', 'pug')

//arichivos estaticos
app.use(express.static('./vistas'))
app.use(express.static('./src'))
app.use(express.static('./css'))

app.get('/', function(req, res){
   // res.send('aplicacion iniciada')
   todos = obtenerContactos()
   res.render('index',{titulo: 'Aplicacion de contactos', contactos:todos})
})
app.get('/agregar/:nombre/:numero',function(req, res){
    let nombre = req.params.nombre
    let numero = req.params.numero
    agergarConstacto(numero, nombre)
    res.redirect('/')

    console.log(nombre, numero)
})

app.get('/borrar/:id', function(req, res){
    let id = req.params.id
    borrarContacto(id)
    res.redirect('/')
})

