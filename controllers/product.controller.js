const express = require('express');
const Product = require('../models/product.model');

const addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({message: `Some error occurred: ${error}`})
    console.error(error);
  }
}

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({message: `Some error occurred: ${error}`})
    console.error(error);
  }
}

const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({message: `Some error occurred: ${error}`})
    console.error(error);
  }
}

const updateProduct = async(req, res) => {
  try {
    const { id } = req.params;
    // This method is not replacing but updating the changed values
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      res.status(404).json({ message: 'Product not found' });
    }
    // Kind of double checking if product was actually updated
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({message: `Some error occurred: ${error}`})
    console.error(error);
  }
}

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully!' });
  } catch (error) {
    res.status(500).json({message: `Some error occurred: ${error}`})
    console.error(error);
  }
}

module.exports = { addProduct, getAllProducts, getSingleProduct, updateProduct, deleteProduct };