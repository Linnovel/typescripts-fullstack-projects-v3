import  {Router} from 'express'
import {body, param} from 'express-validator'
import { createProduct, deleteProduct, getProducts, getProductsById, updateAvailability, updateProduct } from './handlers/product'
import { handleInputErrors } from './middleware/index';


const router = Router()



//Routing
//get ppproductos
router.get('/', getProducts)
router.get('/:id', 
    param('id').isInt().withMessage('ID no valido'),
    handleInputErrors,
    getProductsById

)

//crear producto
router.post('/',
    //validacion de productos
//valiador del nombre
    body('name')
    .notEmpty()
    .withMessage('El nombre del producto no puede ir vacio'),
    //validacion de precio
    body('price')
    .isNumeric()
    .withMessage('Valor no valido')
    .notEmpty()
    .withMessage('El precio no debe ser menor o igual que cero')
    .custom((value) => value > 0).withMessage('Precio no valido'),
    handleInputErrors,
    createProduct

)

//editar informacion del pproducto
router.put('/:id',



        //validacion de productos
    //valiador del nombre
    body('name')
    .notEmpty()
    .withMessage('El nombre del producto no puede ir vacio'),
    //validacion de precio
    body('price')
    .isNumeric()
    .withMessage('Valor no valido')
    .notEmpty()
    .withMessage('El precio no debe ser menor o igual que cero')
    .custom((value) => value > 0).withMessage('Precio no valido'),
    body('availability').isBoolean().withMessage('valor para disponibilidad no valido'),
    handleInputErrors,
     updateProduct
    
    )




//editar informacion del pproducto
router.patch('/:id', 
    param('id').isInt().withMessage('ID no valido'),
    handleInputErrors,
    updateAvailability

)



//borrar producto
router.delete('/:id',
    param('id').isInt().withMessage('ID no valido'),
    handleInputErrors,
    deleteProduct

)


export default router