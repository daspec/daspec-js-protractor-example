var UserDetails = function() {
  this.load = function() { browser.get('/#'); };

  this.contactUser = function() {
    element(by.css('button.contact')).click();
  };

};

module.exports = UserDetails;

