'use strict'
import Product from './product.model'
import { checkUpdate } from '../utils/validator'

export const save = async(req, res)=>{
    try {
        let data = req.body
        let product = new Product(data)
        await product.save()
        return res.send({message: 'Product saved successfully'})
    } catch (error) {       
        console.error(error)
    }
}