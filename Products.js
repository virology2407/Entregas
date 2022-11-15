const fs = require('fs')

class Products {
    constructor(title, price, thumbnail, id) {
        this.title = title
        this.price = price
        this.thumbnail = thumbnail
        this.id = id
    }

    save = async (title, price, thumbnail, id) => {
        let ids = fs.readFile('./products.txt', 'utf-8', (error, fileContent)=>
            {
                if (error) {
                console.log(`There's been an error reading the file: ${error}`)
                }
                else {
                    console.log(`File loaded successfully. Content: ${fileContent}`)
                }     
            }
        )
        let newProduct = new Object()
        newProduct.title = title
        newProduct.price = price
        newProduct.thumbnail = thumbnail
        newProduct.id = ids.length + 1
        try {
            await fs.promises.appendFile('./products.txt', newProduct)
            console.log(`Added successfully. New product id: ${newProduct.id}`)
            return newProduct.Id
        }
        catch (err) {
            console.log(`There's been an error adding a product: ${err}`)
        }
    }
}

export {Products}