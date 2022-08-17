const { count } = require("console")
const { query } = require("express")
const { default: mongoose } = require("mongoose")
const bookModel = require("../models/bookModel")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
 const data =await bookModel.find().select({bookName: 1, authorName:1 , _id: 0})
 console.log(data)
 res.send(data)
}

const getBooksInYear =  async function(req,res){
    const yearFromUser =  req.query.year;
    const data = await bookModel.find({year: yearFromUser})
    res.send(data)
}

const getParticularBooks = async function(req,res){
    const body = req.body 
    const data = await bookModel.find(body)
    res.send(data)
}
const getXINRBooks = async function(req,res){

    const data = await bookModel.find({ "prices.indianPrice" : {$in :["100" ,"200"]}});
    res.send(data)
}

const getRandomBooks = async function(req,res){
    const data = await bookModel.find({totalpages : {$gt: 200}})
    res.send(data)
}

module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
        
        
module.exports.getRandomBooks = getRandomBooks