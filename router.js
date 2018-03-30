"use strict";

const express = require('express');
const router = express.Router();

const homeCtrl = require('./controllers/home');
const articleCtrl = require('./controllers/article');
const userCtrl = require('./controllers/user');

router.get('/', homeCtrl.renderHome); // 获取首页
router.get('/page/:pageNumber',articleCtrl.getByPageNumber);

router.get('/register', [checkLogin, userCtrl.showRegister]); // 获取注册页面
router.post('/register', userCtrl.doRegister); // 用户注册

router.get('/login', [checkLogin, userCtrl.showLogin]); // 获取登录页面
router.post('/login', userCtrl.doLogin); // 用户登录

router.get('/logout', userCtrl.doLogout);　// 退出


function checkLogin(req, res, next) {
  // 权限校验，已经登录的用户，就不要再访问这个页面了，直接跳转到首页就行了
  if (req.session.user) {
    return res.redirect('/');
  }
  next();
}

function checkNotLogin(req, res, next) {
  if (!req.session.user) {
    return res.redirect('/');
  }
  next();
}


module.exports = router;