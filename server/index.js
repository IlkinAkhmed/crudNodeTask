
const express = require('express')
const cors = require('cors')
let Products = require('./api.json')
const app = express()
app.use(express.json())
app.use(cors())

const PORT = 5000
let id = 14


app.get('/', (req, res) => {
    res.send(`<h1>Home Page</h1>`)
})

app.get('/products', (req, res) => {
    res.send(Products)
})

// get product by id
app.get('/products/:id', (req, res) => {
    const { id } = req.params
    const findedProduct = Products.find(x => x.id == id)
    if (findedProduct) {
        res.send(findedProduct)
        res.status(200).json({ message: 'Everything is okay' })
    } else {
        res.status(404).json({ message: "Not Found!!!" })
    }
})


// post product
app.post('/products', (req, res) => {
    const newProduct = {
        id: +id++,
        ...req.body
    }
    Products.push(newProduct)
    res.send(Products)
})

// delete product
app.delete("/products/:id", (req, res) => {
    const { id } = req.params
    const findedProd = Products.find(x => x.id == id)
    if (findedProd) {
        Products = Products.filter(x => x.id != id)
        res.send(Products)
        res.status(200).json({ message: 'Everything is okay' })
    } else {
        res.status(404).json({ message: "Not Found!!!" })
    }
})

// Update Post
app.put('/products/:id', (req, res) => {
    const { id } = req.params
    const index = Products.findIndex(x => x.id == id)
    if (index) {
        Products[index] = {
            id: +id,
            ...req.body
        }
        res.send(Products)
        res.status(200).json({ message: 'Everything is okay' })
    } else {
        res.status(404).json({ message: "Not Found!!!" })
    }
})

app.listen(PORT, () => {
    console.log('server 5000 portunda isleyir');
})
