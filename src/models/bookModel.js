const mongoose = require('mongoose') ;

const bookSchema = new mongoose.Schema(
    {
        bookName: {
            type: String,
            require:true,
            unique:true
        },
        authorName: String,
        category: {
            type: String,
            enum: ["Fantasy" , "Horror" , "Comic Book" , "Historical"]
        },
        year: Number 
    },{timestamps:true});

module.exports = mongoose.model("Book",bookSchema) ;