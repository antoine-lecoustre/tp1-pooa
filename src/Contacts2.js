/**
 * Created by alecoust on 18/09/15.
 */
var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.Contacts2 = function () {
        var listContacts = [];

        this.clear = function () {
            for (var i = 0; i < listContacts.length; i++) {
                listContacts.splice(i,1);
            }
        };

        this.size = function () {
            return listContacts.length;
        };

        this.add = function (contact) {
            listContacts.push(contact);
        };

        this.get = function (id) {
            var i = 0;
            var retContact = null;

            for(var i=0; i<listContacts.length;i++){
                if(listContacts[i].id() == id){
                    retContact = listContacts[i];
                }
            }

            return retContact;
        };

        this.remove = function (id) {
            for(var i=0; i<listContacts.length;i++){
                if(listContacts[i].id() == id){
                    return listContacts.splice(i,1);
                }
            }
        };



        this.getFromName = function (_firstName, _lastName) {
            var i = 0;
            var retListContact = [];

            for(var i=0; i<listContacts.length;i++){
                if(_firstName == listContacts[i].firstName() && _lastName == listContacts[i].lastName()){
                    retListContact.push(listContacts[i]);
                }
            }

            if(retListContact.length == 0){
                return null;
            }else if(retListContact.length == 1){
                return retListContact[0];
            }else{
                return retListContact;
            }
        };

        this.getFromMail = function (_mailAddress) {
            var retListContact = [];

            for(var i=0; i<listContacts.length;i++){
                var mails = listContacts[i].mails();

                for(var j=0;j<mails.length;j++){
                    if(_mailAddress == mails[j].address()){
                        retListContact.push(listContacts[i]);
                    }
                }

            }

            if(retListContact.length == 0){
                return null;
            }else if(retListContact.length == 1){
                return retListContact[0];
            }else{
                return retListContact;
            }
        };

        this.getFromPhone = function (_phoneNumber) {
            var retListContact = [];

            for(var i=0; i<listContacts.length;i++){
                var phones = listContacts[i].phones();

                for(var j=0;j<phones.length;j++){
                    if(_phoneNumber == phones[j].number()){
                        retListContact.push(listContacts[i]);
                    }
                }

            }

            if(retListContact.length == 0){
                return null;
            }else if(retListContact.length == 1){
                return retListContact[0];
            }else{
                return retListContact;
            }
        };

        this.search = function(strategy){
            return strategy.search(this);
        };

        var init = function () {

        };

        init();
    };

    return self;

}(Contact || {}));