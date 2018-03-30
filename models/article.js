"use strict";

const db = require('../db');

function Article(article) {
  this.title = article.title;
  this.content = article.content;
  this.time = article.time;
  this.uid = article.uid;
}

Article.prototype.save = function (callback) {
  db.query(`INSERT INTO articles VALUES(NULL,?,?,?,?)`, [
    this.title,
    this.content,
    this.time,
    this.uid
  ], function (err, result) {
    if (err) {
      return callback(err, null);
    }
    callback(null, result);
  });
};

Article.getById = function (id, callback) {
  db.query(`SELECT * FROM articles WHERE id=?`, [
    id
  ], function (err, result) {
    if (err) {
      return callback(err, null);
    }
    callback(null, result[0]);
  });
};

Article.getByPage = function (skipNumber, takeNumber, callback) {
  db.query(`
    SELECT a.id,a.title,a.content,a.time,u.username 
     FROM articles as a INNER JOIN users as u
      ON a.uid = u.id
        ORDER BY time DESC 
          LIMIT ?,?
  `, [skipNumber, takeNumber], function (err, result) {
    if (err) {
      return callback(err, null);
    }
    callback(null, result);
  });
};

Article.getAllCount = function (callback) {
  db.query('SELECT COUNT(id) as count FROM articles',function (err, result) {
    if (err) {
      return callback(err,null);
    }
    callback(null,result[0].count);
  });
};

module.exports = Article;
