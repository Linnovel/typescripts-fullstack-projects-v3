import express from 'express'
import router from './router.'
import db from './config/db'
import colors from 'colors'

//Conectar a base de datos
async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        console.log( colors.blue( 'Conexión exitosa a la BD'))
    } catch (error) {
        // console.log(error)
        console.log( colors.red.bold( 'Hubo un error al conectar a la BD') )
    }
}
connectDB()

// Instancia de express
const server = express()

//Routing
server.use('/api/products', router)





export default server 