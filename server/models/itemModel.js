var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var itemsSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  image: String,
});

var Items = mongoose.model('Items', itemsSchema);

module.exports = Items;
