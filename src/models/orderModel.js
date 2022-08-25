const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId


const orderSchema = new mongoose.Schema(
    {
        userId: {
            type : ObjectId,
            ref : "productUser"
        },
        productId:{
            type : ObjectId,
            ref : "product"
        },
        amount: Number,
        isFreeAppUser: Boolean, 
        date: mongoose.Schema.Types.Mixed
    },{ timestamps :true}
)

module.exports = new mongoose.model("order" , orderSchema)