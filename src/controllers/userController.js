const UserModel = require("../models/userModel")

const createUser = async function(req,res){
    const user = req.body;
    user.isFreeAppUser = req.appUser
    const saveUser = await UserModel.create(user);
    res.send({"msg ": saveUser})
}
module.exports.createUser = createUser