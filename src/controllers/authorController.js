const AuthorModel= require("../models/newAuthorModel")

const createAuthor= async function (req, res) {
    let author = req.body
    let saveAuthor = await AuthorModel.create(author)
    res.send({data: saveAuthor})
}


module.exports.createAuthor= createAuthor
