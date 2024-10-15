import {Request, Response} from 'express'
import Product from '../models/Products.model'


//function para obtener producto
export const getProducts = async (req:Request, res : Response) => {
    // (req, res) => {
    //     res.json('Desde Get')
    // }
    // res.json('Desde GET')

    try {
        const product = await Product.findAll({
            order : [
                ['price', 'DES']
            ],
            attributes : {exclude : ['createdAt' , 'updatedAt', 'availability']}
        })
        res.json({data : product})
    } catch (error) {
        console.log({error : error})
    }
}


// function obtener product by ID
export const getProductsById = async (req:Request, res : Response) => {
    
    try {
        // console.log(req.params.id)
        const { id } = req.params
        const product = await Product.findByPk(id)

        if(!product){
            return res.status(404).json({
                error : 'Producto no existe'
            })
        }

        res.json({data : product})
    } catch (error) {
        console.log({error : error})
    }
}

//function para crear producto
export const createProduct = async (req : Request, res : Response) => {
    // console.log(req.body)
//    const savedProduct = await product.save()
try {
    const product = await Product.create(req.body)
    res.json({data:product})
} catch (error) {
    console.log({error : error})
}


  
}


// function para actualizar producto
export const updateProduct = async ( req : Request, res : Response) =>{
   
    const { id } = req.params
    const product = await Product.findByPk(id)

    //consultar si existe
    if(!product){
        return res.status(404).json({
            error : 'Producto no existe'
        })
    }

    //luego se procede a actualizar
    //cambios parciales
     await product.update(req.body)

    //cambios a todo el producto de forna destructiva
    // product.name = req.body.name
    // product.price = req.body.name
    // product.availability = req.body.name
    await product.save()


    res.json({data : product})
}


export const updateAvailability = async (req : Request, res : Response) =>{
    const { id } = req.params
    const product = await Product.findByPk(id)

    //consultar si existe
    if(!product){
        return res.status(404).json({
            error : 'Producto no existe'
        })
    }

    //luego se procede a actualizar
    //cambios parciales
    product.availability = !product.dataValues.availability
    await product.save()
    // console.log(product.dataValues.availability)
    res.json({data : product})

}



//function to delete product
export const deleteProduct = async (req : Request, res : Response) => {
    const { id } = req.params
    const product = await Product.findByPk(id)

    //consultar si existe
    if(!product){
        return res.status(404).json({
            error : 'Producto no existe'
        })
    }

    await product.destroy()
    res.json({data : 'Product eliminado'})

}