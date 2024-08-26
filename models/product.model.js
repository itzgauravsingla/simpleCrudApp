const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"]
  },
  quantity: {
    type: Number,
    required: [true, "Product quantity is required"],
    default: 0
  },
  price: {
    type: Number,
    require: [true, 'Product price is required'],
    default: 0
  },
  image: {
    type: String,
    required: false
  }
},
{
  timestamps: true
});

const Product = mongoose.model("Product", ProductSchema); // Products schema will be created
module.exports = Product;