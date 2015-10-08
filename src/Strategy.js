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

        this.search = function(_contacts){
            return _contacts.getFromPhone(_phoneNumber);
        };

        var init = function(_phoneNumber){
            phoneNumber = _phoneNumber;
        };

        init(_phoneNumber);
    };

    self.ChangePhoneStrategy = function(_firstName, _lastName, _initPhone, _changedPhone){
        var firstName;
        var lastName;
        var initPhone;
        var changedPhone;

        var init = function(_firstName, _lastName, _initPhone, _changedPhone){
            firstName = _firstName;
            lastName = _lastName;
            initPhone = _initPhone;
            changedPhone = _changedPhone;
        };

        this.change = function(_contacts){
            _contacts.modifyPhone(_initPhone, _changedPhone);
        };

        init(_firstName, _lastName, _initPhone, _changedPhone);
    };

    self.FromTagSearchStrategy = function(_tag){
        var tag;

        this.search = function(_contacts){
            return _contacts.getFromTag();
        };

        var init = function(_tag){
            tag = _tag;
        };

        init(_tag);
    };

    return self;

}(Contact || {}));