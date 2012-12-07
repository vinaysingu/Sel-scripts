var a = require('./contactData.js'), 
	b = require('./contactObj.js'),
	utils = require('./utils.js');
	var fs = require('fs');
exports.readContact = function(browser,cname) {
/*var random = Math.floor(Math.random()*11);
random = random.toString();
var cnumber = a.VARIABLES.contact_number + random;*/
utils.results('*****Reading a Contact*****');
utils.pause(10000,function(){
/*browser.elementByXPath(b.readObj.crmlink_xpath, function(err,el1){

browser.clickElement(el1, function(err){
browser.waitForElementByXPath(b.readObj.contactslink_xpath, 60000, function(err)
{
	browser.elementByXPathOrNull(b.readObj.contactslink_xpath, function(err, el2)
{
  	browser.clickElement(el2, function(err){*/
	var xpath = "//div[contains(text(),'"+ a.VARIABLES.contact_fname +"')]";
	browser.waitForElementByXPath(xpath, 60000,function(err){
	browser.elementByXPath(xpath,function(err,el3){
	browser.clickElement(el3, function(err){
	utils.pause(6000,function(){
	browser.waitForElementByXPath(b.readObj.heading_xpath, 10000, function(err){
	if(err)	utils.results('Contact Heading incorrect');
	else utils.results('Contact Heading verified');
	browser.elementByXPath(b.readObj.cfname_xpath, function(err,el4){
	browser.getValue(el4, function(err,value){
	if(value == a.VARIABLES.contact_fname) utils.results( 'PASS: First name verified');
	else utils.results(browsername, 'FAIL: First name incorrect');
	browser.elementByXPath(b.readObj.cmname_xpath, function(err,el5){
	browser.getValue(el5, function(err,value){
	if(value == a.VARIABLES.contact_mname) utils.results( 'PASS: Middle name verified');
	else utils.results('FAIL: Middle name incorrect');
	browser.elementByXPath(b.readObj.clname_xpath, function(err,el6){
	browser.getValue(el6, function(err,value){
	if(value == a.VARIABLES.contact_lname) utils.results('PASS: Last name verified');
	else utils.results('FAIL: Last name incorrect');
	browser.elementByXPath(b.readObj.addressEditButton_xpath, function(err, el7){
	browser.clickElement(el7, function(err){
	browser.elementByXPath(b.readObj.addressLine1_xpath, function(err, el8) {
	browser.getValue(el8, function(err,value){
	if(value == a.VARIABLES.contact_addressLine1) utils.results('PASS: Address Line verified');
	else utils.results('FAIL: Address Line incorrect');
	browser.elementByXPath(b.readObj.addressDoneButton_xpath, function(err, el9) {
	browser.clickElement(el9, function(err){
	browser.elementByXPath(b.readObj.jobtitle_xpath, function(err,el10) {
	browser.getValue(el10, function(err,value){
	if(value == a.VARIABLES.contact_jobtitle) utils.results('PASS: Job title Verified');
	else utils.results('FAIL: Job Title incorrect');
	browser.elementByXPath(b.readObj.email_xpath, function(err,el11){
	browser.getValue(el11, function(err,value){
	if(value == a.VARIABLES.contact_email) utils.results('PASS: Email verified');
	else utils.results('FAIL: Email incorrect');
	browser.elementByXPath(b.readObj.phone_xpath, function(err,el11){
	browser.getValue(el11, function(err,value){
	if(value == a.VARIABLES.contact_phone) utils.results('PASS: Phone No. verified');
	else utils.results('FAIL: Phone No. incorrect');
	browser.hasElementByXPath(b.readObj.charecRead_xpath, function(err,bool){
	if(bool) utils.results('PASS: Charecteristic verified');
	else utils.results('FAIL: Charecteristic. incorrect');
	browser.elementByXPath(b.readObj.cnotes_xpath, function(err,el11){
	browser.getValue(el11, function(err,value){
	if(value == a.VARIABLES.contact_notes) utils.results('PASS: Contact notes verified');
	else utils.results('FAIL: Contact Notes incorrect');
	browser.elementByXPath(b.readObj.caccount_xpath, function(err,el11){
	browser.getValue(el11, function(err,value){
	if(value == a.VARIABLES.contact_account) utils.results('PASS: Contact account verified');
	else utils.results('FAIL: Contact account incorrect');
	browser.elementByXPath(b.readObj.cowner_xpath, function(err,el11){
	browser.getValue(el11, function(err,value){
	if(value == a.VARIABLES.contact_owner) utils.results('PASS: Contact owner verified');
	else utils.results('FAIL: Contact owner incorrect');
	process.nextTick(browser.quit());
	})
	})
	})
	})
	})
	})
	})
	})
	})
	})
	})
	})
	})
	})
	})
	})
	})
	})
	})
	})
	})
	})
	})
	})
	})
	
	})
	/*})
	})
	})
	})
	})*/
	
})
})
})})})}

