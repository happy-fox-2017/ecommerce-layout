var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cartSchema = new Schema({
  memberid : String,
  total : Number,
  itemlist : [{ type : Schema.Types.ObjectId, ref : 'Items'}]
})

var Carts =mongoose.model('Carts', cartSchema);

module.exports = Carts;
