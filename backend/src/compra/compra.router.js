const express = require('express');
const catchErrors = require('express-catch-errors');

const router = express.Router();
const { create, list } = require('./compra.controller');

router
  .route('/')
  .get(catchErrors(list))
  .post(catchErrors(create));

module.exports = router;
