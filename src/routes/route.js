const express = require('express');
const router = express.Router();
const productController = require("../controllers/productController")
const userController = require("../controllers/userController")
const orderController = require("../controllers/orderController")

const middleware = require("../middlewares/validateUser")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createProduct", productController.createProduct)
router.post("/createUser", middleware.validate , userController.createUser)
router.post("/createOrder", middleware.validate , orderController.createOrder)

module.exports = router;