const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const createUser = async function (req,res){
  const user = req.body;
  const saveUser = await userModel.create(user);
  return res.send({ msg : saveUser})
}

const login =  async function (req,res){
  const logInDetails = req.body;
  const email = logInDetails.emailId;
  const password = logInDetails.password;

  if(!email){return res.send("email is mandatory")}

  if(!password){return res.send("password is mandatory")}

  const user = await userModel.findOne({emailId :email})
  if(!user){return res.send("Plz Enter Correct Email Id")}

  const isValidPassword = await userModel.findOne({emailId : user.emailId ,password :password})
  if(!isValidPassword){return res.send("Plz Enter Correct Password")}

  const token = jwt.sign({emailId : user.emailId , password : isValidPassword.password} ,"this is secret key")

  return res.send({status  :true, msg : token})
}


const getUserInfo = async function(req,res){

  const uid = req.params.userId;
  const user = await userModel.findById(uid)
  return res.send({msg : user})


}

const updateUser = async function (req,res){
  
  const uid = req.params.userId;
  const user = await userModel.findOneAndUpdate({_id :uid},{age : 20},{new :true})
  return res.send({updatedUser : user })

}

const deleteUser = async function(req,res){
  
  const uid = req.params.userId;
  const user = await userModel.findOneAndUpdate({_id :uid},{isDeleted : true},{new :true})
  return res.send({updatedUser : user })
  
}
module.exports.createUser = createUser
module.exports.login = login
module.exports.getUserInfo = getUserInfo
module.exports.updateUser = updateUser
module.exports.deleteUser = deleteUser