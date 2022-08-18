const mongoose = require('mongoose')

const bookModel1 =  new mongoose.Schema(
    {
        name:{
            type : String,
            require : true
        },
        author_id:{
            type : Number,
            require : true
        },
        price: Number,
        ratings:Number,
    }, { timestamps: true })

module.exports = new mongoose.model("book1",bookModel1)