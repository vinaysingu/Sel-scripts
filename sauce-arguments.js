var webdriver = require('wd')
  , assert = require('assert');
var login = require('./lib/login.js');
var createContact = require('./lib/createContact.js');
var readContact = require('./lib/readContact.js');
var fs = require('fs');
var time = require('./lib/utils.js');
var sldriver = webdriver.remote(
 "ondemand.saucelabs.com"
  , 80
  , "vinayshire"
  , "9e3b9529-6d6d-4637-a66e-6af56ca31058"
);
var browserdriver = webdriver.remote();

// Adding date and time to the firefox console and the log file
exports.starttest = function(browsername, osname, version){

browserdriver.on('status', function(info){
time.getDate(function(date){
console.log(date);
fs.appendFile('./results.txt', '\n-----Script run at: ' + date + '-----\n' + info + '\n', function (err) {
  if (err) throw err;
});
console.log('\x1b[36m%s\x1b[0m', info);
})});

browserdriver.on('command', function(meth, path){
fs.appendFile('./results.txt', meth + ':' + path + '\n', function (err) {
  if (err) throw err;
});  
console.log(' > \x1b[33m%s\x1b[0m: %s', meth, path);
});

sldriver.on('status', function(info){
fs.appendFile('./lib/results.txt', meth + ':' + path + '\n', function (err) {
  if (err) throw err;
});
 console.log('\x1b[36m%s\x1b[0m', info);
});

sldriver.on('command', function(meth, path){
fs.appendFile('./lib/results.txt', meth + ':' + path + '\n', function (err) {
  if (err) throw err;
});
  console.log(' > \x1b[33m%s\x1b[0m: %s', meth, path);
});

var caps = {
  browserName: browsername
    , tags: ["selenium test"]
, name: "Basic CRM Process flow on " + browsername + ":" + osname
};
if((osname === "Windows XP") ||( osname === "Windows 7") || (osname === "Ubuntu"))
{
	caps.version = '';
	caps.platform = 'ANY';
	login.login(browserdriver, caps, function(browserdriver){
	createContact.createContact(browserdriver,function(browserdriver){
	readContact.readContact(browserdriver);
	});
	});
}
else if((osname === "Linux") || (osname === "Mac 10.6") || (osname === "Mac 10.8"))
{
	caps.version = version;
	caps.platform = osname;
	login.login(sldriver, caps, function(sldriver){
	//--createContact.createContact(sldriver,function(sldriver){
	readContact.readContact(sldriver);
	//--});
	});
}

}

	