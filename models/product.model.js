const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, 'Please enter product name'],
    },

    quantity: {
      type: Number,
      require: true,
      default: 0,
    },

    price: {
      type: Number,
      require: true,
      default: 0,
    },

    Image: {
      type: String,
      require: false,
    },
  },
  { timestamps: true }
);

const product = mongoose.model('Product', ProductSchema);

module.exports = product;
