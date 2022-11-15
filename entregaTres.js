const express = require('express')
const fs = require('fs')

class Products {
    constructor(title, price, thumbnail, id) {
        this.title = title
        this.price = price
        this.thumbnail = thumbnail
        this.id = id;
    }

    save = async (title, price, thumbnail, id) => {
        let newProduct = new Object()
        newProduct.title = title
        newProduct.price = price
        newProduct.thumbnail = thumbnail
        newProduct.id = id
        try {
            await fs.promises.appendFile('./products.txt', JSON.stringify(newProduct))
            console.log(`Added successfully. New product id: ${newProduct.id}`)
            return newProduct.Id
        }
        catch (err) {
            console.log(`There's been an error adding a product: ${err}`)
        }
    }
}

const app = express()
const port = 8080
const products = ['beef', 'doll', 'model car', 'lamp', 'wallet']
let productsFile = new Products 

fileData = [
    {
        title: 'beef',
        price: 10.25,
        thumbnail: 'https://www.randomlists.com/img/things/beef.jpg',
        id: 1
    },
    {
        title: 'doll',
        price: 21.99,
        thumbnail: 'https://www.randomlists.com/img/things/doll.jpg',
        id: 2
    },
    {
        title: 'model car',
        price: 14.79,
        thumbnail: 'https://www.randomlists.com/img/things/model_car.jpg',
        id: 3
    }
]
const file = fs.readFileSync('./products.txt', 'utf-8')

const test = app.listen(port, () => {
    console.log(`Listening on port ${test.address().port}`)
})

productsFile.save(fileData)

test.on("error", error => console.log("server error"))

app.get('/products', (req, res) => {
    res.send(products)
})

app.get('/random', (req, res) => {
    res.send(products[Math.floor(Math.random() * products.length)])
})
