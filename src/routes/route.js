const express = require('express');
const router = express.Router();

router.get('/movies' , function(req ,res){
    const array = ['Avengers Endgame' , 'Spider Man-Far From Home' , 'Guardians of the Galaxy Vol. 3' ,' Avengers Secret Wars']
    res.send(array);
});
router.get('/movies/:indexNumber' , function(req ,res){
    const array = ['Avengers Endgame' , 'Spider Man-Far From Home' , 'Guardians of the Galaxy Vol. 3' ,' Avengers Secret Wars']
    const reqPara= req.params;
    const index = reqPara.indexNumber ;
    if( index < array.length ){
        return res.send(array[index]);
    }
    else{
        return res.send("Plz Enter Valid Index");
    }
});

router.get("/films" , function (req , res){
    const obj = [{
        "id" : 1,
        "name" : "Harry Potter and the Philosopher's Stone"
    },
    {
        "id" : 2 ,
        "name" : "Final Destination 5"
    },
    {
        "id" : 3 ,
        "name" : "It Chapter Two"
    },
    {
        "id" : 4 ,
        "name" : "Insidious: Chapter 4"
    },
    {
        "id" : 5 ,
        "name" : "The Conjuring: The Devil Made Me Do It"
    }];

    res.send(obj);
});

router.get("/films/:filmId" , function (req , res){
    const array = [{
        "id" : 1,
        "name" : "Harry Potter and the Philosopher's Stone"
    },
    {
        "id" : 2 ,
        "name" : "Final Destination 5"
    },
    {
        "id" : 3 ,
        "name" : "It Chapter Two"
    },
    {
        "id" : 4 ,
        "name" : "Insidious: Chapter 4"
    },
    {
        "id" : 5 ,
        "name" : "The Conjuring: The Devil Made Me Do It"
    }];

    const reqParas = req.params;
    const filmId = reqParas.filmId ;
    const result = function (){
        for (let i=0 ; i< array.length ;i++){
            const obj = array[i];
            if(obj['id'] == filmId){
                return res.send(obj)
            }
        }
        return res.send("There No Such Film Exist With This Id")
    }
    result();
    //res.send(array);
});

router.get('/sol1', function(req ,res){
    const array = [1,2,3,5,6,7];

    const n = array.length + 1;

    const sum = array.reduce((result,num) =>{ return result + num});
    const missingNumber = n*(n+1)/2 - sum ;
    console.log(missingNumber);
    return res.send({ data : missingNumber });
    // return res.send(`${missingNumber}`)
});

router.get('/sol2', function(req ,res){
    const array = [33, 34, 35, 37, 38];
    const n =array.length + 1;
    const firstNum = array[0];
    const lastNum = array[array.length -1];
    const sum = array.reduce((result,num) =>{ return result + num});
    const missingNumber = n*(firstNum + lastNum)/2 - sum ;
    console.log(missingNumber);
    return res.send({ data : missingNumber });
   //return res.send(`${missingNumber}`)


});
module.exports = router;