'use strict';
//  page router collection

var express = require('express');
var path = require('path');
var router = express.Router();
var request = require('../tool/request.js');
var logger = require("../tool/logger");


router.get('/', function(req,res){
    res.render('index');
});

module.exports = router;