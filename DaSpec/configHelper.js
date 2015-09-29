var configHelper = {

  setUpConfigGlobals: function setUpConfigGlobals() {
    // Make chai assertion library available globally
    var chai = require('chai');
    chai.use(require('chai-as-promised'));
    chai.use(require('chai-things'));
    chai.use(require('chai-string'));
    chai.should();

    Object.defineProperty(protractor.promise.Promise.prototype, 'should', {
      get: Object.prototype.__lookupGetter__('should'),
      set: Object.prototype.__lookupSetter__('should')
    });

    browser.driver.manage().window().maximize();
  }
};

module.exports = configHelper;
