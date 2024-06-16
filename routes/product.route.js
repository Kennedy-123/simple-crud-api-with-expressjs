const express = require('express');
const router = express.Router();
const {
  getProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/product.controller');

// Get all products
router.get('/', getProducts);

// Get a single product
router.get('/:id', getSingleProduct);

// Create a product
router.post('/', createProduct);

// update a product
router.put('/:id', updateProduct);

//delete a product

router.delete('/:id', deleteProduct);

module.exports = router;
