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
// Adding date and time to the firefox console and the log file
fbdriver.on('status', function(info){
fs.exists('./firefoxresults', function(exists){
if(!exists)
{
	fs.mkdir('firefoxresults', function(){
	fs.stat('./firefoxresults', function(err,stats) {
	if(stats.isDirectory())
	{ console.log('Directory "firefoxresults" created');
	}
	})
	})
	}
time.getDate(function(date){
console.log(date);
fs.appendFile('./firefoxresults/firefox.txt', '\n-----Script run on firefox at: ' + date + '-----\n' + info + '\n', function (err) {
  if (err) throw err;
});
console.log('\x1b[36m%s\x1b[0m', info);
})})
});

fbdriver.on('command', function(meth, path){
fs.appendFile('./firefoxresults/firefox.txt', meth + ':' + path + '\n', function (err) {
  if (err) throw err;
});  
console.log(' > \x1b[33m%s\x1b[0m: %s', meth, path);
});
cbdriver.on('status', function(info){
fs.exists('./chromeresults', function(exists){
if(!exists)
{
	fs.mkdir('chromeresults', function(){
	fs.stat('./chromeresults', function(err,stats) {
	if(stats.isDirectory())
	{ console.log('Directory "chromeresults" created');
	}
	})
	})
	}
time.getDate(function(date){
console.log(date);
fs.appendFile('./chromeresults/chrome.txt', '\n-----Script run on Chrome at: ' + date + '-----\n' + info + '\n', function (err) {
  if (err) throw err;
});
console.log('\x1b[36m%s\x1b[0m', info);
})})
});

cbdriver.on('command', function(meth, path){
fs.appendFile('./chromeresults/chrome.txt', meth + ':' + path + '\n', function (err) {
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
login.login(fbdriver,firefox,function(browser3)
{
browser3.quit();
});
/*login.login(sldriver,iPad5, function(browser4){
contact.createContact(browser4);
});

login.login(sldriver,iphone5, function(browser5){
contact.createContact(browser5);
});*/
