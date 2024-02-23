'use strict' 

import mongoose from "mongoose"

const productSchema = mongoose({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true 
    },
    stock: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: Schema.ObjectId,
        ref: 'category',
        required: true
    }
})

export default mongoose.model('product', userSchema)
