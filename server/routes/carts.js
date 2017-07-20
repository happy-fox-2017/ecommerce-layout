const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.get('/', cartController.getAll);
router.get('/:id', cartController.getSingle);
router.post('/', cartController.createCart);
router.delete('/:id', cartController.deleteCart);
router.put('/:id', cartController.updateCart);

module.exports = router;
