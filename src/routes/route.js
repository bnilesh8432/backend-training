const express = require('express');
const lodash = require('lodash')
// const firstQuestion = require('../logger/logger')
// const secondQuestion = require('../util/helper')
// const thirdQuestion = require('../validator/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
    // firstQuestion.func();
    // secondQuestion.date();
    // secondQuestion.month();
    // secondQuestion.info();
    // thirdQuestion.trim('   my fgdgtdyd  ');
    // thirdQuestion.lower('NODE JS IS AN RUNTIME ENVIORNMENT');
    // thirdQuestion.upper('this is 3rd week of funtionup cohort');
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"] ;
    const quarters = lodash.chunk(months , 3)
    console.log("Quarters : ",quarters)

    const odd = [1,3,5,7,9,11,13,15,17,19]
    const tail = lodash.tail(odd)
    console.log("last 9 numbers : " ,tail)

    const array1 = [1,2,3,4,5]
    const array2 = [4,5,6,7,8]
    const array3 = [7,8,9,10,11]
    const array4 = [12,13,14,15]
    const array5 = [12,13,14,15,20,24]
    const unique = lodash.union( array1, array2, array3, array4, array5)
    console.log("Unique Array : ",unique)

    const horror = ["horror","The Shining"]
    const drama = ["drama","Titanic"]
    const thriller = ["thriller","Shutter Island"]
    const fantasy = ["fantasy","Pans Labyrinth"]
    const filmPairs = lodash.fromPairs([horror,drama,thriller,fantasy])
    console.log("Film Object : " ,filmPairs)
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason