"use strict";

const Article = require('../models/article');

exports.renderHome = function (req, res, next) {

  Article.getAllCount(function (err, count) {
    let pageSize = req.app.locals.config.pageSize;
    let totalPage = Math.ceil(parseInt(count) / pageSize);
    console.log(totalPage);
    res.render('home', {
      user: req.session.user,
      totalPage: totalPage
    });
  });
};
