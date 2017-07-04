const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let itemSchema = new Schema({
  model: String,
  brand: String,
  img: String,
  category: Array,
  stock: Number
},{
  timestamps: true
})

let Item = mongoose.model('Item', itemSchema)

module.exports = Item;