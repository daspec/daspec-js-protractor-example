/**
 * Created by PhilBeadle on 10/09/15.
 */

defineStep(/Navigate to "(.*)"/, function (page) {
  console.log(page);
  return browser.get(page).then(function () {
    browser.getTitle().then(function (title) {
      title.should.equal(page);
      console.log('title ' + title);
    });
    'Test Assertion'.should.equal('Test Assertion');
    console.log('visited ' + page);
  });
});
