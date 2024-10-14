import {Request, Response} from 'express'
import Product from '../models/Products.model'
import {check, validationResult} from 'express-validator'


export const createProduct = async (req : Request, res : Response) => {

    // console.log(req.body)
//    const savedProduct = await product.save()

//validacion de productos
    await check('name').notEmpty().withMessage('El nombre del producto no puede ir vacio').run(req)

    let errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errores: errors.array()})
    }


    const product = await Product.create(req.body)
    res.json({data:product})
}