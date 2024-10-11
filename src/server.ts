import express from 'express'
import router from './router.'
import db from './config/db'

//Conectar a base de datos
async function connectDb() {
    try {
        await db.authenticate()
        db.sync()
        console.log('Conexion exitosa a la bse de datos')
    } catch (error) {
        console.log('hubo un error al conectar a la bse de datos', error)
    }
}

connectDb()

const server = express();

//Routing
server.use('/', router)




export default server 