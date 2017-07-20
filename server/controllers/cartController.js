var mongoClient = require('mongodb').MongoClient();
var Carts = require('../models/cartModel');

function getAll(req,res) {
  Carts.find().populate('itemlist')
  .exec(function(err,result){
    if(err) res.send(err.message)
    res.send(result)
  })
}

function getSingle(req,res) {
  Carts.find(req.params.id).populate('itemlist')
  .exec(function(err,result){
    if(err) res.send(err.message)
    res.end(result)
  })
}

function createCart(req,res) {
  Carts.create({
    memberid: req.body.memberid,
    total: req.body.total,
    itemlist: req.body.itemlist
  }, function(err,result){
    if(err) res.send(err.message)
    console.log(result);
    res.send(result)
  })
}

function deleteCart(req,res) {
  Carts.remove({
    _id : req.params.id
  }, function(err,result){
    if(err) res.send(err.message)
    console.log(result);
    res.send(result)
  })
}

function updateCart(req,res) {
  let id = req.params.id;

  Cart.findById(id, function(err,result){
    if(err) res.send(err.message)
    console.log(result);
    res.send(result)
  })
}

module.exports = {
  getAll,getSingle,createCart,deleteCart,updateCart
}
