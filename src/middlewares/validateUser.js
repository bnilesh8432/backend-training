 const validate = function (req,res,next){
     const appUser = req.headers['isfreeappuser']
     if(!appUser){
        res.send("Plz enter isFreeAppUser property in header")
     }
     next()
 }
 module.exports.validate = validate