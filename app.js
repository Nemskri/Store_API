const express = require('express')
require('dotenv').config()
require('express-async-errors')
const port = process.env.PORT || 3000

// ASYNC ERRORS
const app = express()
const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')
const connectDB = require('./db/connect')
const productRouter = require('./routes/products')

// MIDDLEWARE

app.use(express.json())
// Routes



app.get('/', (req, res) => {
    res.send(`<h1>Store API</h1><a href="/api/v1/products">Product Routes</a>`)
})

app.use('/api/v1/products', productRouter)
// Product Routes

app.use(notFoundMiddleware)
app.use(errorMiddleware)



const start = async () => {
    try {
        // Connect to DB
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server listening on Port: ${port}`))
    } catch (e) {
        console.log(e)
    }
}

start();