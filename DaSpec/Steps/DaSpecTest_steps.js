/**
 * Created by PhilBeadle on 10/09/15.
 */

defineStep(/Navigate to "(.*)"/, function (page) {
  return browser.get(page).then(function () {
    browser.getTitle().then(function (title) {
	  expect(page).toEqual(title);
    });
  });
});
