var UserList = require('../../e2e/pages/UserList.js');
var UserDetails = require('../../e2e/pages/UserDetails.js');
var ContactUser = require('../../e2e/pages/ContactUser.js');

var users = new UserList();
var details = new UserDetails();
var contact = new ContactUser();

var Q = require('q');

browser.driver.manage().window().maximize();

defineStep(/On the home page of the site/, function () {
    return browser.get('http://127.0.0.1:8080/').then(function () {
        browser.getTitle().then(function (title) {
            expect('Angular Material - Starter App').toEqual(title);
        });
    });
});

defineStep(/you will see the list of other people in your friends list/, function () {
    return browser.driver.sleep(1000).then(function () {
        users.count().then(function (count) {
            expect(count).toEqual(6);
        });
    });
});

defineStep(/Select a friend you wish to contact by clicking their name such as "(.*)"/, function (name) {
    return element(by.cssContainingText('button', name)).click();
});


defineStep(/Clicking the "Contact" icon in the top right/, function () {
    return element(by.css('button.contact')).click();
});

defineStep(/will open the Contact Options for that person/, function () {
    contact.buttons().count().then(function (count) {
        expect(count).toEqual(4);
    });
    contact.buttons().first().getText().then(function (text) {
        expect(text).toEqual('PHONE');
    });
    return contact.focusedButton().getText().then(function (text) {
        expect(text).toEqual('PHONE');
    });
});

defineStep(/The list of contact options should be/, function (table) {
    return contact.buttons().first().getText().then(function (text) {
        console.log(1, text);
    });
    //var promises = [];
    //table.items.forEach(function (itemRow, index) {
    //    contact.buttons().get(index).getText().then(function (text) {
    //        console.log(index, text);
    //        promises.push(expect(text).toEqual(itemRow[0]));
    //    });
    //});
    //return Q.all(promises);
});


