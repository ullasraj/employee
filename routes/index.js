const express = require('express');

const {employeRoutes} = require('../modules/employe');

const router = express.Router();

router.use('/employe',employeRoutes);
module.exports=router;