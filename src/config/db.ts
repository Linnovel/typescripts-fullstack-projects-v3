import {Sequelize} from 'sequelize-typescript'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import Product from '../models/Products.model';

dotenv.config()

 
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// models: [join(__dirname + '/../models/**/*.ts')]

const db = new Sequelize(process.env.DATABASE_URL!, {
    models: [Product]

})


export default db