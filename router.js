"use strict";

const express = require('express');
const router = express.Router();

const homeCtrl = require('./controllers/home');

router.get('/', homeCtrl.renderHome); // 获取首页

module.exports = router;