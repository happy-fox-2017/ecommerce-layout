var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customersSchema = new Schema({
  username : {
    type: String,
    unique: true,

  },
  name: String,
  password: String,
});

var Customers = mongoose.model('Customers', customersSchema);

module.exports = Customers;
