/**
 * Created by alecoust on 11/09/15.
 */
var Contact = Contact || {};

Contact = (function(self){
    'use strict';

    self.FromNameSearchStrategy = function(_firstName, _lastName){
        var firstName;
        var lastName;

        this.search = function(contacts){
            return contacts.getFromName(firstName, lastName);
        };

        var init = function(_firstName, _lastName){
            firstName = _firstName;
            lastName = _lastName;
        };

        init(_firstName, _lastName);
    };

    self.FromMailSearchStrategy = function(_mailAddress){
        var mailAddress;

        this.search = function(contacts){
            return contacts.getFromMail(_mailAddress);
        };

        var init = function(_mailAddress){
            mailAddress = _mailAddress;
        };

        init(_mailAddress);
    };

    self.FromPhoneSearchStrategy = function(_phoneNumber){
        var phoneNumber;

        this.search = function(contacts){
            return contacts.getFromPhone(_phoneNumber);
        };

        var init = function(_phoneNumber){
            phoneNumber = _phoneNumber;
        };

        init(_phoneNumber);
    };

    return self;

}(Contact || {}));