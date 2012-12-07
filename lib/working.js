var a = require('./contactData.js'), 
	b = require('./contactObj.js'),
	utils = require('./utils.js');
	var fs = require('fs');
exports.createContact = function(browser,browsername) {
/*var random = Math.floor(Math.random()*11);
random = random.toString();
var cnumber = a.VARIABLES.contact_number + random;*/
console.log('*****Reading a Contact*****');
setTimeout(function(){
browser.elementByXPath(b.Obj.crmlink_xpath, function(err,el1){

browser.clickElement(el1, function(err){
browser.waitForElementByXPath(b.Obj.contactslink_xpath, 60000, function(err)
{
	browser.elementByXPathOrNull(b.Obj.contactslink_xpath, function(err, el2)
{
  	browser.clickElement(el2, function(err){
	var xpath = "//div[contains(text(),'"+ a.VARIABLES.contact_number +"')]";
	browser.waitForElementByXPath(xpath, 60000,function(err){
	browser.elementByXPath(xpath,function(err,el3){
	browser.clickElement(el3, function(err){
	browser.waitForElementByXPath(b.Obj.heading_xpath, 10000, function(err){
	if(err)	utils.results('Contact Heading incorrect');
	else utils.results('Contact Heading verified');
	setTimeout(function(){
	browser.elementByXPath(b.Obj.cfname_xpath, function(err,el4){
	browser.getValue(el4, function(err,value){
	if(value == a.VARIABLES.contact_number) utils.results( 'PASS: First name verified');
	else utils.results(browsername, 'FAIL: First name incorrect');
	browser.elementByXPath(b.Obj.cmname_xpath, function(err,el5){
	browser.getValue(el5, function(err,value){
	if(value == a.VARIABLES.contact_mname) utils.results( 'PASS: Middle name verified');
	else utils.results('FAIL: Middle name incorrect');
	browser.elementByXPath(b.Obj.clname_xpath, function(err,el6){
	browser.getValue(el6, function(err,value){
	if(value == a.VARIABLES.contact_lname) utils.results('PASS: Last name verified');
	else utils.results('FAIL: Last name incorrect');
	browser.elementByXPath(b.Obj.addressEditButton_xpath, function(err, el7){
	browser.clickElement(el7, function(err){
	browser.elementByXPath(b.Obj.addressLine1_xpath, function(err, el8) {
	browser.getValue(el8, function(err,value){
	if(value == a.VARIABLES.contact_addressLine1) utils.results('PASS: Address Line verified');
	else utils.results('FAIL: Address Line incorrect');
	browser.elementByXPath(b.Obj.addressDoneButton_xpath, function(err, el9) {
	browser.clickElement(el9, function(err){
	browser.elementByXPath(b.Obj.jobtitle_xpath, function(err,el10) {
	browser.getValue(el10, function(err,value){
	if(value == a.VARIABLES.contact_jobtitle) utils.results('PASS: Job title Verified');
	else utils.results('FAIL: Job Title incorrect');
	browser.elementByXPath(b.Obj.email_xpath, function(err,el11){
	browser.getValue(el11, function(err,value){
	if(value == a.VARIABLES.contact_email) utils.results('PASS: Email verified');
	else utils.results('FAIL: Email incorrect');
	browser.elementByXPath(b.Obj.phone_xpath, function(err,el11){
	browser.getValue(el11, function(err,value){
	if(value == a.VARIABLES.contact_phone) utils.results('PASS: Phone No. verified');
	else utils.results('FAIL: Phone No. incorrect');
	browser.hasElementByXPath(b.Obj.charecRead_xpath, function(err,bool){
	if(bool) utils.results('PASS: Charecteristic verified');
	else utils.results('FAIL: Charecteristic. incorrect');
	browser.elementByXPath(b.Obj.cnotes_xpath, function(err,el11){
	browser.getValue(el11, function(err,value){
	if(value == a.VARIABLES.contact_notes) utils.results('PASS: Contact notes verified');
	else utils.results('FAIL: Contact Notes incorrect');
	browser.elementByXPath(b.Obj.caccount_xpath, function(err,el11){
	browser.getValue(el11, function(err,value){
	if(value == a.VARIABLES.contact_account) utils.results('PASS: Contact account verified');
	else utils.results('FAIL: Contact account incorrect');
	browser.elementByXPath(b.Obj.cowner_xpath, function(err,el11){
	browser.getValue(el11, function(err,value){
	if(value == a.VARIABLES.contact_owner) utils.results('PASS: Contact owner verified');
	else utils.results('FAIL: Contact owner incorrect');
	browser.quit();
	process.exit();
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
	},20000)
	
	})
	})
	})
	})
	})
	
})})})})},30000)}

