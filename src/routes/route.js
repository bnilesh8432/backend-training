const express = require('express');
const firstQuestion = require('../logger/logger')
const secondQuestion = require('../util/helper')
const thirdQuestion = require('../validator/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
    firstQuestion.func();
    secondQuestion.date();
    secondQuestion.month();
    secondQuestion.info();
    thirdQuestion.trim('   my string   ');
    thirdQuestion.lower('NODE JS IS AN RUNTIME ENVIORNMENT');
    thirdQuestion.upper(' this is 3rd week of funtionup cohort');
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason