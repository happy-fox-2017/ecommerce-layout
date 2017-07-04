var express = require('express');
var router = express.Router();
const conn = require('../controllers/costumerController');

/* GET users listing. */
router.get('/', conn.findAllCostumer);

router.post('/', conn.createCostumer);

router.put('/:id', conn.updateCostumer);

router.delete('/:id', conn.deleteCostumer);


module.exports = router;
