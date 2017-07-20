const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let userSchema = new Schema({
  firstName: {
    type: String,
    require: true
  },
  lastName: {
    type: String,
    require: true
  },
  username: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  }
});

let User = mongoose.model('User',userSchema);

module.exports = User
