"use strict";

const db = require('../db');

/*
 * 通过封装，对象自己管理自己
 * */
function User(user) {
  this.username = user.username;
  this.password = user.password;
  this.email = user.email;
  this.avatar = user.avatar;
}

User.getByUsername = function (username, callback) {
  db.query('SELECT * FROM users WHERE username=?', [username], function (err, result) {
    if (err) {
      return callback(err, null);
    }
    callback(null, result[0]);
  });
};

User.prototype.save = function (callback) {
  db.query(
      `INSERT INTO users VALUES(NULL,?,?,?,?)`
      , [this.username, this.password, this.email, this.avatar]
      , function (err, result) {
        if (err) {
          return callback(err, null);
        }
        callback(null, result);
      });
};

User.getById = function (id, callback) {
  db.query('SELECT * FROM users WHERE id=?', [id], function (err, result) {
    if (err) {
      return callback(err, null);
    }
    callback(null, result[0]);
  });
};

User.updateAvatarById = function (avatar, id, callback) {
  db.query('UPDATE users SET avatar=? WHERE id=?', [avatar, id], function (err, result) {
    if (err) {
      return callback(err, null);
    }
    callback(null, result);
  });
};

module.exports = User;
