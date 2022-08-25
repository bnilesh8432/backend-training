
const basicCode= async function(req, res) {
    console.log( "hey man, congrats you have reached the Handler")
    res.send({ msg: "This is coming from controller (handler)"})
    }

module.exports.basicCode= basicCode