'use strict'
const costumer = require('../models/costumer');
var ObjectId = require('mongodb').ObjectID;

let findAllCostumer = (req, res) => {
  costumer.find({}, (err, data) => {
    if (err) {
      res.send(err)
    }
    res.send(data)
  })
}

let createCostumer = (req, res) => {
  costumer.create({
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone
  }, (err, data) => {
    if (err) {
      res.send(err)
    }
    res.send('data inserted')
  })
}

let updateCostumer = (req, res) => {
  let body = req.body
  costumer.findOne({
    _id: ObjectId(req.params.id)
  }, (err, data) => {
    if (data) {
      costumer.update({
        _id: ObjectId(req.params.id)
      }, {
        $set: {
          name : body.name || data.name,
          address : body.address || data.address,
          phone : body.phone || data.phone
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

let deleteCostumer = (req, res) => {
  costumer.remove({
    _id: ObjectId(req.params.id)
  }, (err) => {
    if (err) {
      res.send(err)
    }
    res.send('data deleted')
  })
}

module.exports = {findAllCostumer,createCostumer,updateCostumer,deleteCostumer};