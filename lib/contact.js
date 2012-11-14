var v = require('./contactData.js');
exports.createContact = function(browser) {
var random = Math.floor(Math.random()*11);
random = random.toString();
var cnumber = v.VARIABLES.contact_number + random;
setTimeout(function(){
browser.elementById(
//.waitFor("//div[contains(text(),'CRM')]","xpath",6000)
//.click("//div[contains(text(),'CRM')]","xpath")
//.pause(20000)
.click("//div[contains(text(),'CRM')]","xpath")
.waitFor("//div[contains(text(),'Contacts')]","xpath",6000)
.click("//div[contains(text(),'Contacts')]","xpath")
.waitFor(".//*[@id='app_postbooks_navigator_newButton']", "xpath", 6000)
.click(".//*[@id='app_postbooks_navigator_newButton']", "xpath")
.waitFor(".//*[@id='app_postbooks_workspaceContainer_workspace_inputWidget2_input']", "xpath", 6000)
.waitFor("//*[@id='app_postbooks_workspaceContainer_workspace_checkboxWidget_input']", "xpath", 4000)
.getAttribute("#app_postbooks_workspaceContainer_workspace_checkboxWidget_input", "checked", function(result){if(result !== 'true'){client.click("#app_postbooks_workspaceContainer_workspace_checkboxWidget_input", "css")}})
.setValue("//*[@id='app_postbooks_workspaceContainer_workspace_inputWidget3_input']", "xpath", cnumber)
.setValue("//*[@id='app_postbooks_workspaceContainer_workspace_inputWidget4_input']", "xpath", v.VARIABLES.contact_mname)
.setValue("//*[@id='app_postbooks_workspaceContainer_workspace_inputWidget5_input']", "xpath", v.VARIABLES.contact_lname)
.click("//*[@id='app_postbooks_workspaceContainer_workspace_addressWidget_searchButton']", "xpath")
.waitFor("//div[contains(text(),'Ungargasse 60')]", "xpath", 10000)
.click("//div[contains(text(),'Ungargasse 60')]", "xpath")
.setValue("//*[@id='app_postbooks_workspaceContainer_workspace_inputWidget7_input']", "xpath", v.VARIABLES.contact_jobtitle)
.setValue("//*[@id='app_postbooks_workspaceContainer_workspace_inputWidget8_input']", "xpath", v.VARIABLES.contact_email)
.setValue("//*[@id='app_postbooks_workspaceContainer_workspace_inputWidget9_input']", "xpath", v.VARIABLES.contact_phone)
.click("//*[@id='app_postbooks_workspaceContainer_workspace_contactCharacteristicsWidget_newButton']", "xpath")
.waitFor("//*[@id='app_postbooks_workspaceContainer_workspace_contactCharacteristicsWidget_repeater_ownerProxy_characteristicItem_inputWidget_inputDecorator']", "xpath", 5000)
.setValue("//*[@id='app_postbooks_workspaceContainer_workspace_contactCharacteristicsWidget_repeater_ownerProxy_characteristicItem_inputWidget_input']", "xpath", v.VARIABLES.contact_bday)
.setValue("//*[@id='app_postbooks_workspaceContainer_workspace_textArea_input']", "xpath", v.VARIABLES.contact_notes)
.setValue("//*[@id='app_postbooks_workspaceContainer_workspace_accountWidget_input']", "xpath", v.VARIABLES.contact_account)
.setValue("//*[@id='app_postbooks_workspaceContainer_workspace_userAccountWidget_input']", "xpath", v.VARIABLES.contact_owner)
.click("//*[@id='app_postbooks_workspaceContainer_workspace_contactCommentBox_newButton']", "xpath")
.waitFor("//*[@id='app_postbooks_workspaceContainer_workspace_contactCommentBox_repeater_ownerProxy_repeaterItem_commentType_pickerButton']", "xpath", 5000)
.click("//*[@id='app_postbooks_workspaceContainer_workspace_contactCommentBox_repeater_ownerProxy_repeaterItem_commentType_pickerButton']", "xpath")
.waitFor("//*[@id='app_postbooks_workspaceContainer_workspace_contactCommentBox_repeater_ownerProxy_repeaterItem_commentType_picker_menuItem14']","xpath", 5000)
.click("//*[@id='app_postbooks_workspaceContainer_workspace_contactCommentBox_repeater_ownerProxy_repeaterItem_commentType_picker_menuItem14']","xpath")
.setValue("//*[@id='app_postbooks_workspaceContainer_workspace_contactCommentBox_repeater_ownerProxy_repeaterItem_textArea_input']", "xpath", v.VARIABLES.contact_comment)
.click("//*[@id='app_postbooks_workspaceContainer_saveButton']", "xpath");

