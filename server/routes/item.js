var express = require('express');
var router = express.Router();
const conn = require('../controllers/itemController');

/* GET users listing. */
router.get('/', conn.findAllItem);

router.post('/', conn.createItem);

router.put('/:id', conn.updateItem);

router.delete('/:id', conn.deleteItem);


module.exports = router;
