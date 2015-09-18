/**
 * Created by alecoust on 10/09/15.
 */
var Contact = Contact || {};

Contact = (function(self){
    'use strict';

    self.Gender = {MR: 1, MME: 2};

    self.Contact = function(_gender, _firstName, _lastName){
        var gender;
        var firstName;
        var lastName;

        var mails = [];
        var phones = [];

        this.gender = function(){
            return gender;
        };

        this.firstName = function(){
            return firstName;
        };

        this.lastName = function(){
            return lastName;
        };

        this.addMail = function(_mail){
            mails.push(_mail);
        };

        this.addPhone = function(_phones){
            phones.push(_phones);
        };

        this.mails = function(){
            return mails;
        };

        this.phones = function(){
            return phones;
        };

        this.id = function(){
            'xxxxx-xxxxx-xxxxx-xxxxx-xxxxx'.replace(/x/g, function (c) {
                var r = Math.random()*16| 0, v = c == 'x' ? r : (r&0x3|0x8);
                return v.toString(16);
            });
        };

        var init = function(_gender, _firstName, _lastName){
            gender = _gender;
            firstName= _firstName;
            lastName = _lastName;
        };

        init(_gender, _firstName, _lastName);

    };

    return self;

}(Contact || {}));