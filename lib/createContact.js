var a = require('./contactData.js');
var b = require('./contactObj.js');
exports.createContact = function(browser) {
var random = Math.floor(Math.random()*11);
random = random.toString();
var cnumber = a.VARIABLES.contact_number + random;
setTimeout(function(){
browser.elementByXPath(b.Obj.crmlink_xpath, function(err,el1){
console.log(cnumber);
browser.clickElement(el1, function(err){
browser.waitForElementByXPath(b.Obj.contactslink_xpath, 60000, function(err)
{
	browser.elementByXPathOrNull(b.Obj.contactslink_xpath, function(err, el2)
{
  	browser.clickElement(el2, function(err){
	browser.elementByXPath(b.Obj.newbutton_xpath, function(err, el3){
	browser.clickElement(el3, function(err){
	browser.elementByXPath(b.Obj.cfname_xpath, function(err, el4){
	browser.type(el4, cnumber, function(err) {
	browser.elementByXPath(b.Obj.cmname_xpath, function(err, el5){
	browser.type(el5, a.VARIABLES.contact_mname, function(err){
	browser.elementByXPath(b.Obj.clname_xpath, function(err, el6){
	browser.type(el6, a.VARIABLES.contact_lname, function(err){
	browser.elementByXPath(b.Obj.addrsearch_xpath, function(err, el7){
	browser.clickElement(el7, function(err) {
	browser.waitForElementByXPath(b.Obj.addrtext_xpath, 10000, function(err){
	browser.elementByXPath(b.Obj.addrtext_xpath, function(err, el8){
	browser.clickElement(el8, function(err){
	browser.elementByXPath(b.Obj.jobtitle_xpath, function(err,el9){
	browser.type(el9,a.VARIABLES.contact_jobtitle, function(err){
	browser.elementByXPath(b.Obj.email_xpath, function(err, el10){
	browser.type(el10, a.VARIABLES.contact_email, function(err){
	browser.elementByXPath(b.Obj.phone_xpath, function(err, el11){
	browser.type(el11, a.VARIABLES.contact_phone, function(err){
	browser.elementByXPath(b.Obj.charecnew_xpath, function(err,el12){
	browser.clickElement(el12, function(err){
	browser.waitForElementByXPath(b.Obj.charecinput_xpath, 1000, function(err){
	browser.elementByXPath(b.Obj.charecinput_xpath, function(err, el13){
	browser.type(el13,a.VARIABLES.contact_bday, function(err){
	browser.elementByXPath(b.Obj.cnotes_xpath, function(err, el14){
	browser.type(el14, a.VARIABLES.contact_notes, function(err){
	browser.elementByXPath(b.Obj.caccount_xpath, function(err, el15){
	browser.type(el15, a.VARIABLES.contact_account, function(err){
	browser.elementByXPath(b.Obj.cowner_xpath, function(err, el16){
	browser.type(el16, a.VARIABLES.contact_owner, function(err){
	browser.elementByXPath(b.Obj.savebutton_xpath, function(err, el17){
	browser.clickElement(el17, function(err){
	browser.elementByXPath("//div[contains(text(),'"+ cnumber +"')]",function(err,el18){ browser.isVisible(el18, function(err,flag){
if(flag)
{
	console.log('contact saved');
}
else
{
console.log('contact not saved');
}
browser.quit();
});
})
})
})
})})})})})})})})})})})})})
})})})})})})
})})})})})})})})})})})})})})})})},6000);
}
