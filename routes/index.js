var express = require('express');
var router = express.Router();
const index = require('../controllers/index');

/* GET home page. */
router.get('/home', index.home);
router.get('/countries/full', index.FETCH_COUNTRIES_AND_STATES);
router.get('/state/:country', index.STATES);

module.exports = router;
