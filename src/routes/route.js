const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookControllers")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post('/newBook' ,BookController.newBook);
router.get('/getAllBooks' ,BookController.allBooks);

module.exports = router;