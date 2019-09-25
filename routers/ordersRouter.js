const router = require('express').Router();

const addOrder =  require('../controllers/order/createOrder');
const findAllOrders = require('../controllers/order/findAllOrders');
const deleteOrders = require('../controllers/order/deleteOrders');
const updateOrders  = require('../controllers/order/updateOrder');
const findByIdOrders = require('../controllers/order/findByIdOrders');


router.post('/', addOrder);
router.get('/', findAllOrders);
router.get('/:id', findByIdOrders);
router.put('/:id', updateOrders);
router.delete('/', deleteOrders);

module.exports = router;