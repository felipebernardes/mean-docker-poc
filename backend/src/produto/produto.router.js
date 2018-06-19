const express = require('express');
const catchErrors = require('express-catch-errors');

const router = express.Router();
const { list } = require('./produto.controller');

router.route('/').get(catchErrors(list));

module.exports = router;
