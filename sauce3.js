var webdriver = require('wd')
  , assert = require('assert');
var login = require('./lib/login.js');
var contact = require('./lib/contact2.js');
var fs = require('fs');
var time = require('./lib/getDate.js');
var sldriver = webdriver.remote(
 "ondemand.saucelabs.com"
  , 80
  , "vinayshire"
  , "9e3b9529-6d6d-4637-a66e-6af56ca31058"
);
var fbdriver = webdriver.remote();
var cbdriver = webdriver.remote();

fbdriver.on('status', function(info){
time.getDate(function(date){
console.log(date);
var message = date + '\n' + info + '\n';
fs.appendFile('firefox.txt', message, function (err) {
  if (err) throw err;
});
console.log('\x1b[36m%s\x1b[0m', info);
})});

fbdriver.on('command', function(meth, path){
fs.appendFile('firefox.txt', meth + ':' + path + '\n', function (err) {
  if (err) throw err;
});  
console.log(' > \x1b[33m%s\x1b[0m: %s', meth, path);
});
cbdriver.on('status', function(info){
fs.appendFile('chrome.txt', info + '\n', function (err) {
  if (err) throw err;
});
 console.log('\x1b[36m%s\x1b[0m', info);
});

cbdriver.on('command', function(meth, path){
fs.appendFile('chrome.txt', meth + ':' + path + '\n', function (err) {
  if (err) throw err;
});
 console.log(' > \x1b[33m%s\x1b[0m: %s', meth, path);
});
sldriver.on('status', function(info){

 console.log('\x1b[36m%s\x1b[0m', info);
});

sldriver.on('command', function(meth, path){

  console.log(' > \x1b[33m%s\x1b[0m: %s', meth, path);
});

var iPad5 = {
  browserName: 'ipad'
  , version: '5'
  , platform: 'Mac 10.6'
  , tags: ["examples"]
, name: "This is to test login function in iPad5"
}
var firefox = {
 browserName: 'firefox'
  , version: ''
  , platform: 'ANY'
  , tags: ["examples"]
, name: "This is an example test in firefox"
}
var chrome = {
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

/*login.login(fbdriver,firefox,function(browser)
{
contact.createContact(browser);
}
);

login.login(cbdriver,chrome,function(browser2)
{
contact.createContact(browser2);
}
);
*/
login.login(sldriver,safari,function(browser3)
{
contact.createContact(browser3);
});
/*login.login(sldriver,iPad5, function(browser4){
contact.createContact(browser4);
});

login.login(sldriver,iphone5, function(browser5){
contact.createContact(browser5);
});*/
