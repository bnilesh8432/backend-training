const express = require('express');
const router = express.Router();

let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ]
       },
   ]
 router.post('/players', function(req,res){
    const player = req.body ;
    const pName = player.name;
    for(let i=0 ; i<players.length ;i++){
        if(pName === players[i].name){
            return res.send("Player is already exist")
        }
    }
    players.push(player);
    console.group(players)
    return res.send(pName)


 });
module.exports = router;