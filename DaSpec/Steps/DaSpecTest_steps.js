/**
 * Created by PhilBeadle on 10/09/15.
 */
defineStep(/The right way to greet the (.*) is "(.*)"/, function (subject, expectedGreeting) {
  expect('Hello, World!').toEqual(expectedGreeting);
  expect('Test Assertion').toEqual('Test Assertion');
});

defineStep(/Navigate to "(.*)"/, function (page) {
  console.log(page);
  return browser.get(page).then(function(){

    console.log('visited' + page);
  });
});
