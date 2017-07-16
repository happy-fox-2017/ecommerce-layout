const m_barang = require('../models/barang.js')

var add = function (req, res) {
  var book = new m_barang({
    nama: req.body.nama,
    deskripsi: req.body.deskripsi,
    gambar: req.body.gambar,
    harga: req.body.harga,
    category: req.body.category,
    stok: req.body.stok
  })
  book.save(function(err, result) {
    if (err) res.status(500).send(err)
    else res.status(200).send(result)
  })
}

var remove = function(req, res) {
  m_barang.remove({_id:req.params._id}, function(err, result) {
    if (err) res.status(500).send(err)
    else res.status(200).send(result)
  })
}

var getAll = function(req, res) {
  m_barang.find({}, function(err, result) {
    if(err) res.status(500).send(err)
    else res.status(200).send(result)
  })
}

var getById = function(req, res) {
  m_barang.findById({_id:req.params._id}, function(err, result) {
    if(err) res.status(500).send(err)
    else res.status(200).send(result)
  })
}

var edit = function(req, res) {
  m_barang.findById({_id:req.params._id}, function(err, result) {
    if(err) res.status(500).send(err)
    // else res.status(200).send(result)
    m_barang.findOneAndUpdate({_id: req.params._id},
                            {$set: {nama:req.body.nama || result.nama, deskripsi: req.body.deskripsi || result.deskripsi,
                                    gambar: req.body.gambar || result.gambar, harga: req.body.harga || result.harga,
                                    category: req.body.category || result.category,
                                    stok: req.body.stok || result.stok}}, function(err, newResult) {
      if(err) res.status(500).send(err)
      else res.status(200).send(newResult)
    })
  })
}

module.exports = {
  add,
  remove,
  getAll,
  getById,
  edit
}
