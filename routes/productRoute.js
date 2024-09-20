const express = require("express");
const Product = require("../models/productModel.js");
const router = express.Router();
const {
  getProducts,
  getProduct,
  postProduct,
  putProduct,
  deleteProduct,
} = require("../controller/productController.js");

// List all products
router.get("/", getProducts);

// Get a product
router.get("/:id", getProduct);

// Add a product
router.post("/", postProduct);

// Update a product
router.put("/:id", putProduct);

// Delete a product
router.delete("/:id", deleteProduct);

module.exports = router;
