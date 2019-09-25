const router = require('express').Router();

const createProduct = require('../controllers/product/createProduct');
const deleteProduct = require('../controllers/product/deleteProduct');
const findAllProduct = require('../controllers/product/findAllProduct');
const findProductById = require('../controllers/product/findProductById');
const updateProduct = require('../controllers/product/updateProduct');

const multer = require('multer');
const uuidv1 = require('uuid/v4');
const {IMAGES} = require('../constants/extensions');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (IMAGES.includes(file.mimetype)) {
        cb(null, 'public/photos')
    } else{
     cb('UNKNOWN FILE', null)
        }
    },
    filename: function ( req, file, cb) {
        cb(null, uuidv1() + '.' + file.originalname.split('.').pop())
    }
});

const  upload = multer({storage});

router.post('/',upload.fields([{name:'photo', maxCount:1}]), createProduct);
router.delete('/:id', deleteProduct);
router.get('/', findAllProduct);
router.get('/:id', findProductById);
router.put('/:id', updateProduct);

module.exports = router;
