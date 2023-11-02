const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

router.route('/')
  .get(productController.readAll)
  .post(productController.create)
  .delete(productController.removeAll);

router.route('/search/:name')
  .get( productController.findByName);


router.route('/:id')
  .get(productController.readById)
  .put(productController.updateById)
  .delete(productController.removeById);




module.exports = router;
