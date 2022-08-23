const mongoose = require('mongoose')

const publisherSchema = new mongoose.Schema(
    {
        name:String,
        headQuarter : String
    },{timestamps : true});


module.exports =new mongoose.model("newPublisher" ,publisherSchema)