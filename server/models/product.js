const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let productSchema = new Schema({
  nama: {
    type: String,
    unique: true,
    required: true
  },
  harga: {
    type: String,
    required: true,
  },
  img:{
    type: String,
    required: true,
  },
  stok:{
    type: Number
  },
  tag: [{
    type: String
  }]
});

let Product = mongoose.model('Product', productSchema);

module.exports = Product
