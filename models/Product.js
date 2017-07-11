var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = {

  name: {
    type: String,
    default: '',
    trim: true,
    required: 'Name required'
  },

  discription: {
    type: String,
    default: '',
    trim: true,

  },

 price: {
    type: Number,
    default: 0,
    trim: true,
    required: 'Price required'
  },

 quantity: {
    type: String,
    default: '',
    trim: true,
    required: 'Quantity required'
  },

  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },

  created: {
    type: Date,
    default: Date.now
  }
}

var Product = mongoose.model('Product', ProductSchema, 'Products');
module.exports = Product;
