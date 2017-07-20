var express = require('express');
var router = express.Router();
const User = require('../models/users');
const Product = require('../models/product');
const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');

/* GET home page. */
router.post('/product', function(req, res) {
  Product.create(
    req.body
  , function(err, response) {
    if (err) console.log(err)
    else res.send(response);
  })
})
router.get('/product', function(req, res) {
  Product.find({}, function(err, response) {
    if (err) console.log(err)
    else res.send(response);
  })
})
router.get('/product/:category', function(req, res) {
  Product.find({
    tag: req.params.category
  }, function(err, response) {
    if (err) console.log(err)
    else res.send(response);
  })
})
router.get('/product/search/:keyword', function(req, res) {
  Product.find({
    nama: new RegExp(req.params.keyword, 'i')
  }, function(err, response) {
    if (err) console.log(err);
    else res.send(response)
  })
})



router.post('/signup', function(req, res, next) {
  let hash = bcrypt.hashSync(req.body.password, saltRounds)
  User.create({
    firstName: req.body.firstname,
    lastName: req.body.lastname,
    username: req.body.username,
    password: hash,
    email: req.body.email
  }, function( err, response) {
    if (err) res.send(err);
    else {
      res.send(response)
    }
  })
})
router.post('/login', function(req, res, next) {
  User.findOne({
    username: req.body.username
  }, function(err, response) {
    if (err) console.log(err);
    else {
      if (!response) {
        res.send("usernameFail")
      } else if (bcrypt.compareSync(req.body.password, response.password)) {
        let obj = {
          username: response.username,
          email: response.email
        }
        let token = jwt.sign(obj, "residu")
        console.log(token);
        res.send(token)
      } else {
        res.send("passFail")
      }
    }
  })
})
router.post('/get-username-from-login', function(req, res) {
  token = req.body.token
  console.log(token);
  let username = jwt.verify(token, "residu", function(err, decoded) {
    if (err) res.send(err)
    else {
      res.send(decoded)
    }
  })
})

module.exports = router;
