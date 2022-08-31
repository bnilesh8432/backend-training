const jwt = require('jsonwebtoken')
const UserModel = require('../models/userModel')

const auth= async function (req,res,next){
try{
    //authentication
    const token = req.headers['x-auth-token']
  if(!token) {
    return res.status(401).send({status: false ,msg : "Plz enter token"})
  }

  const decodeToken = jwt.verify(token,"this is secret key" )

  console.log(decodeToken)

    // auhtorization
    const userIdFromBody = req.params.userId;
    const user = await UserModel.findById(userIdFromBody)
    if(!user){
      return res.status(404).send({ status : false , msg :"The server can not find the requested user"});
    }
    if(user.isDeleted == true){
      return res.status(404).send({ status : false , msg :"This user is already deleted"});
    }

    const loginedUser = decodeToken._id
    if(userIdFromBody != loginedUser){
      return res.status(403).send({ status : false , msg :"The user does not have access rights to the content"})
    }
  next()
}
catch(err){
  return res.status(500).send({msg : err.message})
}
}
module.exports.auth = auth