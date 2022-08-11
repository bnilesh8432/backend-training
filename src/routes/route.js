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
 // Optional Question

//  router.post('/players/:playerName/bookings/:bookingId',function(req,res){
//     const reqParams = req.params ; // parameters i.playerName ii.bookingId
//     const booking = req.body;   // fetching data from body
//     const pName = reqParams.playerName; //name from params
//     const bookingId = reqParams.bookingId; //bookingId from params
//     let isNameExist = false ;   // Assuming name is not exist 

//     //cheking players array object
//     for(let i=0 ; i<players.length ; i++){
//         //checking player name from params is equal to the name inside players array object
//         if(pName === players[i].name){
//             isNameExist = true; // name is exist

//             // checking players object has booking property 
//             if(players[i].hasOwnProperty('Booking') == true){

//                 // if it has booking property exist then checking booning number is equal to booking id
//                 if(players[i].Booking[0].bookingNumber == bookingId){
//                     return res.send('booking was already processed')
//                 }
//             }
//             else{
//                 // adding  booking property to player inside that we are storing all details of booking
//                 players[i]['Booking'] = [booking];
//             }
//             break ;
//         }
//     }
//     // if name is not exist 
//     if(isNameExist == false){
//         return res.send("Player Name Dosen't Exist")
//     }
//     console.log(reqParams)
//     console.log(players)
//    res.send(players)
//  });


let persons =[
    {
        "name" : "PK",
        "age"  : 10,
        "votingStatus" : false
    },
    {
        "name" : "SK",
        "age"  : 20,
        "votingStatus" : false
    },
    {
        "name" : "AA",
        "age"  : 70,
        "votingStatus" : false
    },
    {
        "name" : "SC",
        "age"  : 5,
        "votingStatus" : false
    },
    {
        "name" : "HO",
        "age"  : 40,
        "votingStatus" : false
    }
];

router.post('/persons' , function(req,res){
    const ageQuery = req.query.age;
    const result = persons.filter(obj => obj.age > ageQuery);
    const eligableVoters = []
    for(let i =0 ; i< result.length ; i++){
        person = result[i];
        person.votingStatus = true ;
        eligableVoters.push(person)
    }
 
    res.send(eligableVoters);
});
module.exports = router;