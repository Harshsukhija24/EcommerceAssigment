import express from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../Controller/Post.js";

const router = express.Router();

router.post("/product", createProduct); // Create a new product
router.get("/product", getProducts); // Get all products
router.get("/product/:id", getProductById); // Get a single product by ID
router.put("/product/:id", updateProduct); // Update a product
router.delete("/product/:id", deleteProduct); // Delete a product

export default router;
