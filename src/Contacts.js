/**
 * Created by alecoust on 10/09/15.
 */
var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    var pInstance = null;

    self.Contacts = {
        instance : function () {
            if (pInstance == null) {
                pInstance = new Contacts();
            }
            return pInstance;
        }
    };

    var Contacts = function () {
        var listContacts = [];

        this.clear = function () {
            for (var i = 0; i < listContacts.length; i++) {
                listContacts.remove(i);
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

        var init = function () {

        };

        init();
    };

    return self;

}(Contact || {}));