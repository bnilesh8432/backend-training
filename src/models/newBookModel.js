const mongoose = require('mongoose');
const ObjectID = mongoose.Schema.Types.ObjectId;

const bookSchema = new mongoose.Schema(
    {
        name:String,
		author:{
            type:ObjectID,
            ref :"newAuthor"
        },
	    price: Number,
		ratings:Number,
		publisher: {
            type: ObjectID ,
            ref :"newPublisher"
        },
        isHardCover :{
            type : Boolean,
            default : false
        }
    },{timestamps : true});

module.exports =new mongoose.model("newBook" ,bookSchema)