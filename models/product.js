const { default: mongoose } = require('mongoose')

require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product must have a Name']
    },
    price: {
        type: Number,
        required: [true, 'Product Price must have a Name']
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.5
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            message: `{VALUE} is not supported`,
        },
    }
})

module.exports = mongoose.model('product', ProductSchema)