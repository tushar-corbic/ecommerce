const express = require("express");
const { route } = require("../app");
const { getAllProducts , createProduct, updateProduct, deleteProduct, getProductDetail} = require("../controllers/productController");

const router = express.Router();


router.route("/products").get(getAllProducts);
router.route("/products/new").post(createProduct);
router.route("/products/:id").put(updateProduct).delete(deleteProduct).get(getProductDetail);


module.exports = router