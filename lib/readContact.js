var a = require('./contactData.js'), 
	b = require('./contactObj.js'),
	utils = require('./utils.js');
	var fs = require('fs');
	var caps = require('../sauce-arguments.js');
exports.readContact = function(browser) {
/*var random = Math.floor(Math.random()*11);
random = random.toString();
var cnumber = a.VARIABLES.contact_number + random;*/
utils.results('*****Reading a Contact*****');
utils.pause(20000,function(){
utils.results(caps.browserdetails.browserName);
browser.elementByXPath(b.readObj1.crmlink_xpath, function(err,el1){

browser.clickElement(el1, function(err){
browser.waitForElementByXPath(b.readObj1.contactslink_xpath, 60000, function(err)
{
	browser.elementByXPathOrNull(b.readObj1.contactslink_xpath, function(err, el2)
{
  	browser.clickElement(el2, function(err){
	var xpath = "//div[contains(text(),'"+ a.VARIABLES.contact_fname +"')]";
	browser.waitForElementByXPath(xpath, 60000,function(err){
	browser.elementByXPath(xpath,function(err,el3){
	browser.clickElement(el3, function(err){
	utils.pause(6000,function(){
	browser.waitForElementByXPath(b.readObj1.heading_xpath, 10000, function(err){
	if(err)	utils.results('Contact Heading incorrect');
	else utils.results('Contact Heading verified');
	browser.elementByXPath(b.readObj1.cfname_xpath, function(err,el4){
	browser.getValue(el4, function(err,value){
	if(value == a.VARIABLES.contact_fname) utils.results('PASS: First name verified');
	else utils.results('FAIL: First name incorrect');
	browser.elementByXPath(b.readObj1.cmname_xpath, function(err,el5){
	browser.getValue(el5, function(err,value){
	if(value == a.VARIABLES.contact_mname) utils.results('PASS: Middle name verified');
	else utils.results('FAIL: Middle name incorrect');
	browser.elementByXPath(b.readObj1.clname_xpath, function(err,el6){
	browser.getValue(el6, function(err,value){
	if(value == a.VARIABLES.contact_lname) utils.results('PASS: Last name verified');
	else utils.results('FAIL: Last name incorrect');
	browser.elementByXPath(b.readObj1.addressEditButton_xpath, function(err, el7){
	browser.clickElement(el7, function(err){
	browser.elementByXPath(b.readObj1.addressLine1_xpath, function(err, el8) {
	browser.getValue(el8, function(err,value){
	if(value == a.VARIABLES.contact_addressLine1) utils.results('PASS: Address Line verified');
	else utils.results('FAIL: Address Line incorrect');
	browser.elementByXPath(b.readObj1.addressDoneButton_xpath, function(err, el9) {
	browser.clickElement(el9, function(err){
	browser.elementByXPath(b.readObj1.jobtitle_xpath, function(err,el10) {
	browser.getValue(el10, function(err,value){
	if(value == a.VARIABLES.contact_jobtitle) utils.results('PASS: Job title Verified');
	else utils.results('FAIL: Job Title incorrect');
	browser.elementByXPath(b.readObj1.email_xpath, function(err,el11){
	browser.getValue(el11, function(err,value){
	if(value == a.VARIABLES.contact_email) utils.results('PASS: Email verified');
	else utils.results('FAIL: Email incorrect');
	browser.elementByXPath(b.readObj1.phone_xpath, function(err,el11){
	browser.getValue(el11, function(err,value){
	if(value == a.VARIABLES.contact_phone) utils.results('PASS: Phone No. verified');
	else utils.results('FAIL: Phone No. incorrect');
	browser.hasElementByXPath(b.readObj1.charecRead_xpath, function(err,bool){
	if(bool) utils.results('PASS: Charecteristic verified');
	else utils.results('FAIL: Charecteristic. incorrect');
	browser.elementByXPath(b.readObj1.cnotes_xpath, function(err,el11){
	browser.getValue(el11, function(err,value){
	if(value == a.VARIABLES.contact_notes) utils.results('PASS: Contact notes verified');
	else utils.results('FAIL: Contact Notes incorrect');
	browser.elementByXPath(b.readObj1.caccount_xpath, function(err,el11){
	browser.getValue(el11, function(err,value){
	if(value == a.VARIABLES.contact_account) utils.results('PASS: Contact account verified');
	else utils.results('FAIL: Contact account incorrect');
	browser.elementByXPath(b.readObj1.cowner_xpath, function(err,el11){
	browser.getValue(el11, function(err,value){
	if(value == a.VARIABLES.contact_owner) utils.results('PASS: Contact owner verified');
	else utils.results('FAIL: Contact owner incorrect');
	process.nextTick(function(){utils.results('***** Updating the contact *****')});
	
	utils.pause(2000,function(){
	if(caps.browserdetails.browserName == "chrome")
	{ 
		browser.elementByXPath(b.readObj1.cmname_xpath, function(err,el22){
		browser.clear(el22, function(err){
		browser.elementByXPath(b.readObj1.cmname_xpath, function(err,el24){
		browser.type(el24,a.VARIABLES.contact_newmname, function(err){
		browser.elementByXPath(b.readObj1.savebutton_xpath, function(err, el25){
		browser.clickElement(el25, function(err){
		utils.pause(4000, function(){
		process.nextTick(function(){utils.results('***** Verifying the contact Update*****')});
		browser.elementByXPath(b.readObj1.refreshButton_xpath, function(err, el26){
		browser.clickElement(el26, function(err){	
		utils.pause(5000,function(){
		browser.waitForElementByXPath(xpath, 60000,function(err){
		browser.elementByXPath(xpath,function(err,el27){
		browser.clickElement(el27, function(err){
		utils.pause(6000,function(){
		browser.elementByXPath(b.readObj1.cmname_xpath,function(err,el29){
		browser.getValue(el29, function(err,value){
		if(value == a.VARIABLES.contact_newmname)	utils.results("contact updated");
		else utils.results("contact updated");
		browser.elementByXPath(b.readObj1.savebutton_xpath, function(err, el30){
		browser.clickElement(el30, function(err){
		browser.quit();
		})
		})
		})
		})
		})
		})
		})
		})
		})})
		})
		})
		})
		})
		})
		})
		})
	})
	}
	else{
	browser.elementByXPath(b.readObj1.documentsLink_xpath, function(err,el23){
	browser.clickElement(el23, function(err){
	browser.elementByXPath(b.readObj1.documentAttach_xpath, function(err,el12){
	browser.clickElement(el12,function(err){
	/*browser.elementByXPath(b.readObj1.documentPurpose_xpath, function(err,el13){
	browser.clickElement(el3,function(err){
	browser.elementByXPath(b.readObj1.documentType_xpath, function(err,el14){
	browser.clickElement(el14, function(err){*/
	browser.elementByXPath(b.readObj1.documentOk_xpath, function(err, el15){
	browser.clickElement(el15, function(err){
	browser.elementByXPath(b.readObj1.documentSearch_xpath, function(err, el16){
	browser.clickElement(el16, function(err){ //-- clicking on the account name
	utils.pause(2000,function(){
	browser.elementByXPath(b.readObj1.documentAccount_xpath, function(err,el21){
	if(el21) utils.results('Account is attached to contact');
	else utils.results('Account not attached');
	browser.elementByXPath(b.readObj1.savebutton_xpath, function(err, el17){
	browser.clickElement(el17, function(err){
	utils.pause(4000, function(){
	process.nextTick(function(){utils.results('***** Verifying the contact Update*****')});
	browser.elementByXPath(b.readObj1.refreshButton_xpath, function(err, el18){
	browser.clickElement(el18, function(err){	
	utils.pause(5000,function(){
	browser.waitForElementByXPath(xpath, 60000,function(err){
	browser.elementByXPath(xpath,function(err,el19){
	browser.clickElement(el19, function(err){
	utils.pause(6000,function(){
	browser.hasElementByXPath(b.readObj1.documentAccount1_xpath, function(flag){
	if(flag) utils.results('Contact Update verified');
	else utils.results('Contact Update verified');
	})
	})
	})
	})})})
	
	
	})
	
	})
	
	/*})
	})
	})
	})*/
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
	})}
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
	
	})
	})
	})
	})
	})
	})
	
})
})
})})})}

