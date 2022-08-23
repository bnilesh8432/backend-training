const PublisherModel= require("../models/newPublisherModel")

const createPublisher= async function (req, res) {
    let publisher = req.body
    let savePublisher = await PublisherModel.create(publisher)
    res.send({data: savePublisher})
}
 const getPublisher = async function(req,res){
    const getPublishers = await PublisherModel.find()
    res.send({data : getPublishers})
 }

module.exports.createPublisher = createPublisher
module.exports.getPublisher = getPublisher