/**
 * Created by alecoust on 10/09/15.
 */
var Contact = Contact || {};

Contact = (function(self){
    'use strict';

    self.Builder = function(){

        this.createMinimalContact = function(_gender, _firstName, _lastName){
            return new Contact.Contact(_gender, _firstName, _lastName);
        };

        this.createContactWithProfessionalMail = function(_gender, _firstName, _lastName, _mailAddress){
            var contact = new Contact.Contact(_gender, _firstName, _lastName);
            contact.addMail(_mailAddress, Contact.MailCategory.PRO);
            return contact;
        };

        this.createContactWithProfessionalMobile = function(_gender, _firstName, _lastName, _mobilePhone){
            var contact = new Contact.Contact(_gender, _firstName, _lastName);
            contact.addPhone(_mobilePhone, Contact.PhoneCategory.PRO, Contact.PhoneType.MOBILE);
            return contact;
        };
    }

    return self;

}(Contact || {}));