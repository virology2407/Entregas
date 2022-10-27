class Users {
    constructor(firstName, lastName, books, pets) {
        this.firstName = firstName
        this.lastName = lastName
        this.books = books
        this.pets = pets
    }

    getFullName = () => {
        return `User's name ${this.firstName} ${this.lastName} `
    }

    addPet = (foo) => {
        return this.pets.push(foo)
    }

    countPet = () => {
        return this.pets.length
    }

    addBook = (title, author) => {
        let newBook = new Object()
        newBook.title = title
        newBook.author = author
        return this.books.push(newBook)
    }

    getBookNames = () => {
        let result = new Array
        for (let i = 0; i < this.books.length; i++) {
            result.push(this.books[i].title)
        }
        return result
    }


}

let user = new Users()

let books = [
    {
        title: "Lord of the Rings",
        author: "JRR Tolkien"
    },
    {
        title: "The Silmarillion",
        author: "JRR Tolkien"
    },
    {
        title: "The Hobbit",
        author: "JRR Tolkien"
    }
]
user.firstName = "Jay"
user.lastName = "Son"
user.books = books
user.pets = ["Cat"]

user.addPet("Another cat")
user.addBook("Unfinished Tales", "JRR Tolkien")

console.log(user.getFullName())
console.log(user.pets)
console.log(user.countPet())
console.log(user.books)
console.log(user.getBookNames())