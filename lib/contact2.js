var a = require('./contactData.js');
var b = require('./contactObj.js');
exports.createContact = function(browser) {
var random = Math.floor(Math.random()*11);
random = random.toString();
var cnumber = 'contact50987';
setTimeout(function(){
browser.elementByXPath(b.Obj.crmlink_xpath, function(err,el1){
console.log(cnumber);
browser.clickElement(el1, function(err){
browser.waitForElementByXPath(b.Obj.contactslink_xpath, 60000, function(err)
{
	browser.elementByXPathOrNull(b.Obj.contactslink_xpath, function(err, el2)
{
	browser.clickElement(el2, function(err){	
	browser.waitForVisibleByXPath("//div[contains(text(),'"+ cnumber +"')]", 60000,function(err){ 
if(err)
{
	console.log('contact not saved');
}
else
{
console.log('contact saved');
}
browser.quit();
})
})
})
})
})})},60000);
}
