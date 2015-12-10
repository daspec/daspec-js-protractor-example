var UserList = function() {
  this.count = function() {
    return element.all(by.css('md-list-item')).count();
  };
};

module.exports = UserList;

