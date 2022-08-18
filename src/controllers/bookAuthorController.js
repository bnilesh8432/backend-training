const bookModel = require("../models/bookModel1") ;
const authorModel = require("../models/authorModel");


const createBook = async function(req,res){
    const book =  req.body;
    const author_id = book.author_id
    if(!author_id){
        return res.send("plz enter author id")
    }
    const saveBook = await bookModel.create(book)

    res.send({msg : saveBook});

}

const createAuthor = async function(req,res){
    const author =  req.body;
    const author_id = author.author_id
    if(!author_id){
        return res.send("You can't insert data without giving author_id !")
    }
    const saveAuthor = await authorModel.create(author)

    res.send(saveAuthor);
}

const getBook = async function(req,res){
    const data = await bookModel.find()
    console.log(data)
    res.send(data)
}

const getAuthor = async function(req,res){
    const data = await authorModel.find()
    console.log(data)
    res.send(data)
}

const getBookByAuthor = async function(req,res){
    const author =  await authorModel.findOne({author_name : "Chetan Bhagat"})
    //const author_id = author.author_id
    const allBooks = await bookModel.find({author_id : author.author_id}) 
    res.send(allBooks)
}

const findAuthor = async function(req,res){
    const book = await bookModel.findOneAndUpdate({name : "Two states"},{price : 150},{ new :true})
    const author =  await authorModel.findOne({author_id : book.author_id})

    res.send({book_author : author['author_name'] , book_price : book['price']})
}

const specificPriceBook = async function(req,res){
    const findBook = await bookModel.find({price : {$gte :50 ,$lte :100}}).select({author_id :1 , _id :0})
    const id = findBook.map(inp => inp.author_id)
  
    let temp =[]
    for(let i=0; i<id.length; i++) {
        let x = id[i]
        const author = await authorModel.find({author_id:x}).select({author_name:1, _id:0})
        temp.push(author)
    }

   const authorName = temp.flat()

   res.send(authorName)
}
module.exports.createBook= createBook
module.exports.createAuthor = createAuthor
module.exports.getBook = getBook
module.exports.getAuthor = getAuthor
module.exports.getBookByAuthor = getBookByAuthor
module.exports.findAuthor = findAuthor
module.exports.specificPriceBook = specificPriceBook