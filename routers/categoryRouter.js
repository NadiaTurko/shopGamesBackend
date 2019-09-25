const router = require('express').Router();

const createCategory =  require('../controllers/category/createCategory');
const deleteCategory = require('../controllers/category/deleteCategory');
const findAllCategory = require('../controllers/category/findAllCategory');
const findCategoryById = require('../controllers/category/findByIdCategory');
const updateCategory = require('../controllers/category/updateCategory');


router.post('/', createCategory);
router.get('/', findAllCategory);
router.get('/:id', findCategoryById);
router.put('/:id', updateCategory);
router.delete('/', deleteCategory);

module.exports = router;