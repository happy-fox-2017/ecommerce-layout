const express = require('express')
var router = express.Router()
const c_barang = require('../controllers/c_barang')
// const c_customer = require('../controllers/c_customer')
// const c_transaction = require('../controllers/c_transaction')
router.get('/', function(req, res) {
  res.status(200).send({msg : 'Hi There! Im on Working right now!'})
})
//books
router.post('/api/barang', c_barang.add) //done
router.delete('/api/barang/:_id', c_barang.remove) //done
router.get('/api/barang/', c_barang.getAll) //done
router.get('/api/barang/:_id', c_barang.getById) //done
router.put('/api/barang/:_id', c_barang.edit) //done
//customers
// router.post('/api/customers', c_customer.add) //done
// router.get('/api/customers', c_customer.getAll) //done
// router.get('/api/customers/:_id', c_customer.getById) //done
// router.delete('/api/customers/:_id', c_customer.remove) //done
// router.put('/api/customers/:_id', c_customer.edit) //done
// //transactions
//
// router.post('/api/transactions', c_transaction.add) //done
// router.get('/api/transactions', c_transaction.getAll) //done
// router.get('/api/transactions/:_id', c_transaction.getById) //done
// router.delete('/api/transactions/:_id', c_transaction.remove) //done
// router.put('/api/transactions/:_id', c_transaction.edit) //done

module.exports = router
