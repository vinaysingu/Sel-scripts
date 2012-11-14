var webdriver = require('wd')
  , assert = require('assert');

var browser = webdriver.remote(
  "ondemand.saucelabs.com"
  , 80
  , "vinaysingu"
  , "be75e7f4-4f09-48d6-89e6-889a07e86891"
);

browser.on('status', function(info){
  console.log('\x1b[36m%s\x1b[0m', info);
});

browser.on('command', function(meth, path){
  console.log(' > \x1b[33m%s\x1b[0m: %s', meth, path);
});

var desired = {
  browserName: 'android'
  , version: '4'
  , platform: 'Linux'
  , tags: ["examples"]
  , name: "This is an example test"
}

browser.init(desired, function() {
browser.get("https://mobile.xtuple.com")
.elementById("main_form_id",function(err,el){ browser.type(el,"vinay.singu@zenqa.com")})
.elementById("main_form_password", function(err, el2) {
            browser.type(el2, "atacapfringe")})
.elementById("main_form_loginButton", function(err, el3) {browser.clickElement(el3)})
})
      

