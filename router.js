"use strict";

const express = require('express');
const router = express.Router();

const homeCtrl = require('./controllers/home');
const articleCtrl = require('./controllers/article');


router.get('/', homeCtrl.renderHome); // 获取首页
router.get('/page/:pageNumber',articleCtrl.getByPageNumber);


module.exports = router;