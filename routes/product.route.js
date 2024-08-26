const express = require('express');
const { addProduct, getAllProducts, getSingleProduct, updateProduct, deleteProduct } = require('../controllers/product.controller');
const router = express.Router();

/**
 * POST- '/api/products' Post method
 * Save/Add a product
 */
router.post('/', addProduct);

/**
 * GET- '/api/products' Get method
 * Get all products
 */
router.get('/', getAllProducts);

/**
 * GET- '/api/product/:id' Get method
 * Get product based on it's id
 */
router.get('/:id', getSingleProduct);

/**
 * PUT- '/api/product/:id' Put method
 * Update a product based on it's id
 */
router.put('/:id', updateProduct);

/**
 * DELETE- '/api/product/:id' Delete method
 * Delete a product based on id
 */
router.delete('/:id', deleteProduct);

module.exports = router;