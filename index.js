const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // module to use .env for environment variables
// const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route');
const app = express();

// middleware
app.use(express.json()); // middleware for JSON
app.use(express.urlencoded({ extended: false })); // middleware for Form

// routes
app.use('/api/products', productRoute);

/**
  GET- '/' Get method
  Hello World method
*/
app.get('/', function(req, res) {
  res.send(`Hello Express ${req.body.name}`);
});

// /**
//  * POST- '/api/products' Post method
//  * Save/Add a product
//  */
// app.post('/api/product', async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({message: `Some error occurred: ${error}`})
//     console.error(error);
//   }
// });

// /**
//  * GET- '/api/products' Get method
//  * Get all products
//  */
// app.get('/api/products', async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({message: `Some error occurred: ${error}`})
//     console.error(error);
//   }
// });

// /**
//  * GET- '/api/product/:id' Get method
//  * Get product based on it's id
//  */
// app.get('/api/product/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({message: `Some error occurred: ${error}`})
//     console.error(error);
//   }
// });

// /**
//  * PUT- '/api/product/:id' Put method
//  * Update a product based on it's id
//  */
// app.put('/api/product/:id', async(req, res) => {
//   try {
//     const { id } = req.params;
//     // This method is not replacing but updating the changed values
//     const product = await Product.findByIdAndUpdate(id, req.body);
//     if (!product) {
//       res.status(404).json({ message: 'Product not found' });
//     }
//     // Kind of double checking if product was actually updated
//     const updatedProduct = await Product.findById(id);
//     res.status(200).json(updatedProduct);
//   } catch (error) {
//     res.status(500).json({message: `Some error occurred: ${error}`})
//     console.error(error);
//   }
// });

// /**
//  * DELETE- '/api/product/:id' Delete method
//  * Delete a product based on id
//  */
// app.delete('/api/product/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndDelete(id);
//     if (!product) {
//       res.status(404).json({ message: 'Product not found' });
//     }
//     res.status(200).json({ message: 'Product deleted successfully!' });
//   } catch (error) {
//     res.status(500).json({message: `Some error occurred: ${error}`})
//     console.error(error);
//   }
// });

(async function () {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log('Connected with MongoDB');
    app.listen(3000, () => {
      console.log('Server is listening on port 3000');
    })
  } catch {
    console.log('Unable to connect to MongoDB');
  }
})();
