const express = require('express');
const employeController = require('./employe.controller');

const router = express.Router();

router.post('/new',employeController.register);

module.exports = router;