'use strict'
import Categoy from './category.model.js'
import { checkUpdate } from '../utils/validator.js'

export const save = async(req, res)=>{
    try {
        let data = req.body
        let category = new Categoy(data)
        await category.save()
        return res.send({message: 'Category saved successfully'})
    } catch (error) {
        console.error(error)
        return res.status(500).send({message: 'Error saving category'})
    }
}

export const update = async(req, res)=>{
    try {
        let { id } = req.params
        let data = req.body
        let update = checkUpdate(data, false)
        if(!update) return res.status(400).send({message: 'Have submitted some data that cannot be update or missing data'})
        let updateCategory = await Categoy.findOneAndUpdate(
            {_id: id},
            data,
            {new: true}
        )
        if(!updateCategory) return res.status(404).send({message: 'Category not found, not update'})
        return res.send({message: 'Category update successfully', updateCategory})
    } catch (error) {
        console.error(error)
        return res.status(500).send({message: 'Error updating category'})
    }
}

export const deleteC = async(req, res)=>{
    try {
        let { id } = req.params
        let deleteCategory = await Categoy.deleteOne({_id: id})
        if(deleteCategory.deletedCount == 0) return res.status(404).send({message: 'Category not found, not deleted'})
        return res.send({message: 'Deleted category successfully'})
    } catch (error) {
        console.error(error)
        return res.status(500).send({message: 'Error deleting category'})
    }
}

export const search = async(req, res)=>{
    try {
        let { search } = req.body
        let categories = await Categoy.find(
            {name: search}
        )
        if(categories.length == 0) return res.status(404).send({message: 'Category not fount'})
        return res.send({message: 'Category found', categories})
    } catch (error) {
        console.error(error)
        return res.status(500).send({message: 'Error searching category'})
    }
}