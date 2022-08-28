const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleware = require('../middleware/auth')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/user", userController.createUser)
router.post("/login", userController.login)
router.get("/user/:userId",middleware.auth, userController.getUserInfo)
router.put("/user/:userId",middleware.auth, userController.updateUser)
router.delete("/user/:userId",middleware.auth,userController.deleteUser)
module.exports = router;