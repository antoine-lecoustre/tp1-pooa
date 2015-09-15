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

        };

        var init = function(_mailAddress){
            mailAddress = _mailAddress;
        };

        init(_mailAddress);
    }

    return self;

}(Contact || {}));