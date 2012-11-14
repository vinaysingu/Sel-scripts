var webdriver = require('wd')
  , assert = require('assert');
var login = require('./lib/login.js');
var contact = require('./lib/createContact.js');

var browser = webdriver.remote(
  "ondemand.saucelabs.com"
  , 80
  , "vinaysingu"
  , "be75e7f4-4f09-48d6-89e6-889a07e86891"
);
var firefoxbrowser = webdriver.remote();
var chromebrowser = webdriver.remote();

firefoxbrowser.on('status', function(info){
  console.log('\x1b[36m%s\x1b[0m', info);
});

firefoxbrowser.on('command', function(meth, path){
  console.log(' > \x1b[33m%s\x1b[0m: %s', meth, path);
});
/*chromebrowser.on('status', function(info){
 console.log('\x1b[36m%s\x1b[0m', info);
});

chromebrowser.on('command', function(meth, path){
  console.log(' > \x1b[33m%s\x1b[0m: %s', meth, path);
});
browser.on('status', function(info){
 console.log('\x1b[36m%s\x1b[0m', info);
});

browser.on('command', function(meth, path){
  console.log(' > \x1b[33m%s\x1b[0m: %s', meth, path);
});

var iPad5 = {
  browserName: 'ipad'
  , version: '5'
  , platform: 'Mac 10.6'
  , tags: ["examples"]
, name: "This is to test login function in android"
}
*/
var firefox = {
 browserName: 'firefox'
  , version: ''
  , platform: 'ANY'
  , tags: ["examples"]
, name: "This is an example test in firefox"
}
/*var chrome = {
 browserName: 'chrome'
  , version: ''
  , platform: 'ANY'
  , tags: ["examples"]
, name: "This is an example test chrome"
}
var safari = {
 browserName: 'safari'
 , version: '5'
 , platform: 'Mac 10.6',
   tags: ["sample"]
  ,name: "This is an example to test safari"
}
var iphone5 = {
browserName: 'iphone'
 , version: '5'
 , platform: 'Mac 10.6',
   tags: ["sample"]
  ,name: "This is an example to test iphone 5"
}
*/
login.login(firefoxbrowser,firefox,function(browser)
{
contact.createContact(browser);
}
);

