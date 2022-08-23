const BookModel = require("../models/newBookModel")
const AuthorModel= require("../models/newAuthorModel")
const PublisherModel= require("../models/newPublisherModel")
const mongoose = require('mongoose')


const createBook= async function (req, res) {
    // let book = req.body
    // const {author , publisher} = book
    // let authorId = await AuthorModel.findById(author)
    // let publisherId = await PublisherModel.findById(publisher)


    // if(!book.author){
    //     return res.send("Plz Enter Author Id")
    // }
    // else if(authorId == null){
    //     return res.send("Plz Enter Valid Author ID")
    // }

    // if(!book.publisher){
    //     return res.send("Plz Enter Publisher Id")
    // }
    // else if(publisherId == null){
    //     return res.send("Plz Enter Valid Publisher ID")
    // }
    let newBook = req.body
    const{author,publisher}=newBook
    if(!author){
        return res.send("author_id does not exist")
    }
    if(!publisher){
        return res.send("publisher_id does not exist")
    }

let author_idvalid = await AuthorModel.findById(author)
if(!author_idvalid){
    return res.send("not a valid author_id")
}

let publisher_idvalid = await PublisherModel.findById(publisher)
if(!publisher_idvalid){
    return res.send("not a valid publisher_id")
}
    let saveBook = await BookModel.create(newBook)
    return res.send({data: saveBook})
}

const getBook= async function (req, res) {
    let Books = await BookModel.find().populate("author publisher")
    res.send({data: Books})
}

const updateBook = async function (req,res){
     const publisher = await PublisherModel.find({name : {$in :["Penguin","HarperCollins"]}}).select({_id : 1})

    publisher.map(async function(pid){
        const saveBook = await BookModel.updateMany({publisher : pid} , {isHardCover : true})
    })
    const updatedBook = await BookModel.find().populate("author publisher")
    res.send(updatedBook)
}

const updatePrice = async function(req,res){
    const author = await AuthorModel.find({rating : {$gte : 3.5}}).select({_id:1})

    author.map(async function(aid){
        const updateprice = await BookModel.updateMany({author : aid} , {$inc : {price : 10}})
    })
    const updatedBook = await BookModel.find().populate("author publisher")
    res.send(updatedBook)
}

module.exports.createBook = createBook
module.exports.getBook = getBook
module.exports.updateBook = updateBook
module.exports.updatePrice = updatePrice