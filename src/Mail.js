/**
 * Created by alecoust on 10/09/15.
 */
var Contact = Contact || {};

Contact = (function(self){
    'use strict';

    self.MailCategory = {PERSO: 1, PRO: 2};

    self.Mail = function(_address, _mailCategory){
        var address;
        var mailCaterory;

        this.address = function(){
            return address;
        };

        this.category = function(){
            return mailCaterory;
        };

        var init = function(_address, _mailCategory){
            address = _address;
            mailCaterory = _mailCategory;
        };

        init(_address, _mailCategory);
    };

    return self;

}(Contact || {}));