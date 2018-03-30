const path = require('path');

module.exports = {
  debug: true,
  secret:'heyBlog',
  pageSize:5,
  uploadDir: path.join(__dirname,'uploads'),
  avatarDir: path.join(__dirname,'uploads/avatar')
};
