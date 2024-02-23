'use strict'

import { Router } from 'express'
import { deleteC, save, search, update } from './category.controller.js'

const api = Router()

api.post('/save', save)
api.put('/update/:id', update)
api.delete('/delete/:id', deleteC)
api.post('/search', search)

export default api