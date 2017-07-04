'use strict'
const Item = require('../models/item');
var ObjectId = require('mongodb').ObjectID;

let findAllItem = (req, res) => {
  Item.find({}, (err, data) => {
    if (err) {
      res.send(err)
    }
    res.send(data)
  })
}

let createItem = (req, res) => {
  Item.create({
    model: req.body.model,
    brand: req.body.brand,
    img: req.body.img,
    category: req.body.category,
    stock: req.body.stock
  }, (err, data) => {
    if (err) {
      res.send(err)
    }
    res.send('data inserted')
  })
}

let updateItem = (req, res) => {
  let body = req.body
  Item.findOne({
    _id: ObjectId(req.params.id)
  }, (err, data) => {
    if (data) {
      Item.update({
        _id: ObjectId(req.params.id)
      }, {
        $set: {
          model : body.model || data.model,
          brand : body.brand || data.brand,
          img : body.img || data.img,
          category : body.category || data.category,
          stock : body.stock || data.stock

        }
      }, (err, data) => {
        if (err) {
          res.send(err)
        }
        res.send('data edited')
      })
    }
    else {
      res.send('no data available to edit')
    }
  })
}

let deleteItem = (req, res) => {
  Item.remove({
    _id: ObjectId(req.params.id)
  }, (err) => {
    if (err) {
      res.send(err)
    }
    res.send('data deleted')
  })
}

module.exports = {findAllItem,createItem,updateItem,deleteItem};