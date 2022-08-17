const BookModel = require('../models/bookModel')

const newBook = async function(req,res){
    let book = req.body;
    let saveBook =await BookModel.create(book);
    return res.send({msg: saveBook});
}

const getBookData= async function (req, res) {
    let allBooks= await BookModel.find()
    res.send({msg: allBooks})
}
module.exports.newBook = newBook ;
module.exports.allBooks = getBookData ;