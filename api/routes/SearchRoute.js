const express = require('express');
const SearchController = require('../controllers/SearchController');

const router = express.Router();

router.get('/', SearchController.searchAllProduct);

router.get('/byId', SearchController.searchProductById);

module.exports = router;