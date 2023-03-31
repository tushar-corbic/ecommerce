const express = require("express");
const { route } = require("../app");
const { getAllProducts } = require("../controllers/productController");

const router = express.Router();


router.route("./products").get(getAllProducts)


module.exports = router