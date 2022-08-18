const mongoose =  require('mongoose');

const authorModel =  new mongoose.Schema(
    {
        author_id:{
            type : Number,
            require :true,
            unique : true
        },
        author_name: String,
        age: Number,
        address:String
    }, { timestamps: true })
module.exports = new mongoose.model("author", authorModel)