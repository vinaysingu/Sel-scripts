var D = require('./loginData.js');
var a = require('./loginObj.js');
var utils = require('./utils.js');
var fs = require('fs');
exports.login = function(browser,desired,callback){
browser.init(desired, function() {
  browser.get(D.data.webaddress, function() {
      browser.setImplicitWaitTimeout(10000,function(){ browser.elementById(a.obj.username_id, function(err, el) {
        browser.type(el, D.data.username,function(err){if(err){console.log('Site not accessable');}
else{
	browser.elementById(a.obj.pwd_id, function(err,el2){
	browser.type(el2, D.data.pwd, function(err){
	browser.elementById(a.obj.login_id, function(err,el3){
	browser.clickElement(el3, function(err){
	browser.elementByXPath(a.obj.toytruck_xpath, function(err, el4){
	browser.clickElement(el4, function(err){
	browser.waitForElementByXPath(a.obj.welcome_xpath,60000,function(err)
{
	browser.elementsByXPath(a.obj.welcome_xpath, function(err,el5)
	{
	browser.isVisible(el5, function(err,flag){
	if(flag){
		utils.results('Site loaded successfully ');
	}
	else
	{
		utils.results('Site loading failed or took more than expected time');
	}
	callback(browser);

				})
			})

	})})})
          })
        })
      })
   })}
  })
})
})
})
})
}

