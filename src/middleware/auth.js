const jwt = require('jsonwebtoken')
const auth= function (req,res,next){
    const token = req.headers['x-auth-token']
  if(!token) {return res.send({msg : "plz enter token"})}

  const decodeToken = jwt.verify(token,"this is secret key")
  console.log(decodeToken)
  next()
}
module.exports.auth = auth