 const validate = function (req,res,next){
     const appUser = req.headers['isfreeappuser']
     if(!appUser){
        res.send("Plz enter isFreeAppUser property in header")
     }
     req['appUser'] = Boolean(appUser)
     next()
 }
 module.exports.validate = validate