const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let costumerSchema = new Schema({
  name: String,
  address: String,
  phone: String
})

let Costumer = mongoose.model('Costumer', costumerSchema)

module.exports = Costumer;