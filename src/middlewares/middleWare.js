const moment = require('moment')
const mid = function(req,res,next){
    const time = moment().format("YYYY-MM-DD hh:mm")
    const ip = req.socket.localAddress
    const path = req.route.path
    console.log("You are in middle ware ")
    console.log(time ,ip , path)
    next()
}

module.exports.mid = mid