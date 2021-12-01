import mysql from 'mysql'
let todos
//conexion
const conector = mysql.createConnection({
    host: 'localhost',
    user: 'karen24hernandez',
    password: '240702',
    database: 'agenda_contactos'
})

const conectar = () =>{
    conector.connect(err =>{
        if(err) throw err 
        console.log('conectado')
    })
}

const agergarConstacto = (numero, nombre) =>{
    const sql = `INSERT INTO agenda (id_agenda, numero_contacto, nombre_contacto) VALUES (${null}, ${numero}, "${nombre}")`
    conector.query(sql, function(err, result, filed){
        if(err) throw err
        console.log(result)
    })
}

const obtenerContactos = () =>{
    const sql = 'SELECT * FROM agenda'
    conector.query(sql, function(err, result, field){
        todos = result
    })
    return todos
}

const borrarContacto = id =>{
    const sql = `DELETE FROM agenda where id_agenda=${id}`
    conector.query(sql)
}

export{agergarConstacto, obtenerContactos,borrarContacto}