const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const createUser = async function (req, res) {
  try {
    const user = req.body;
    const saveUser = await userModel.create(user);
    return res.status(201).send({ msg: saveUser })
  }
  catch (err) {
    console.log(err)
    return res.status(500).send({error : err.message})
  }
}

const login = async function (req, res) {
  try {
    const logInDetails = req.body;
    const email = logInDetails.emailId;
    const password = logInDetails.password;

    if (!email) { return res.status(400).send("email is mandatory") }

    if (!password) { return res.status(400).send("password is mandatory") }

    const user = await userModel.findOne({ emailId: email })
    if (!user) { return res.status(404).send("Plz Enter Correct Email Id") }

    if (user.password != password) { return res.status(401).send("Plz Enter Correct Password") }

    const token = jwt.sign({ _id: user._id, emailId: user.emailId, password: user.password }, "this is secret key")

    return res.status(200).send({ status: true, msg: token })
  }
  catch (err) {
    return res.status(500).send({ msg: err.message })
  }
}


const getUserInfo = async function (req, res) {
  try {
    const uid = req.params.userId;
    const user = await userModel.findById(uid)
    return res.status(200).send({ msg: user })
  }
  catch (err) {
    return res.status(500).send({ msg: err.message })
  }

}

const updateUser = async function (req, res) {
  try {
    const uid = req.params.userId;
    const user = await userModel.findOneAndUpdate({ _id: uid }, { age: 20 }, { new: true })
    return res.status(200).send({ updatedUser: user })
  }
  catch (err) {
    return res.status(500).send({ msg: err.message })
  }
}

const deleteUser = async function (req, res) {
  try {
    const uid = req.params.userId;
    const user = await userModel.findOneAndUpdate({ _id: uid }, { isDeleted: true }, { new: true })
    return res.status(200).send({ updatedUser: user })
  }
  catch (err) {
    return res.status(500).send({ msg: err.message })
  }
}
module.exports.createUser = createUser
module.exports.login = login
module.exports.getUserInfo = getUserInfo
module.exports.updateUser = updateUser
module.exports.deleteUser = deleteUser