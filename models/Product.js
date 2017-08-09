var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = {


      
    name: {
        type: String,
        trim: true,
        default: '',
        required: 'product Name required'
      },
      
    description: {
    type: String,
    default: '',
    trim: true,
    required: 'Description required'
  },

  price: {
    type: Number,
    default: '',
    required: 'Price required'
  },
  
    quantity: {
        type: Number,
        trim: true,
        default: '',
        required: 'Quantity required'
    },
    
    category: {
        type: String,
        trim: true,
        default: '',
        required: 'category required'
    },
    
    user: {
    type: Schema.ObjectId,
    ref: 'User'
  },

    created: {
    type: Date,
    default: Date.now
  }
};


var Product = mongoose.model('Product', ProductSchema, 'product');
module.exports = Product;
