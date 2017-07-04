var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var barangSchema = new Schema({
  nama: String,
  deskripsi: String,
  gambar: String,
  harga: String,
  category: String,
  stok: Number
});

var barang = mongoose.model('Barang', barangSchema);

module.exports = barang
