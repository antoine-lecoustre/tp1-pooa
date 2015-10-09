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

        var tag;

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

        this.addTag = function(_tag){
            tag = _tag;
        };

        this.mails = function(){
            return mails;
        };

        this.phones = function(){
            return phones;
        };

        this.phonesToString = function(){
            var ret = '';

            for(var i=0;i<phones.length;i++){
                var category;
                var type;

                if(phones[i].category() == 1){
                    category = 'PERSO';
                }else{
                    category = 'PRO';
                }

                if(phones[i].type() == 1){
                    type = 'MOBILE';
                }else{
                    type = 'PHONE';
                }

                ret += phones[i].number() + "["+category+"]["+type+"]";
                if(i!=phones.length - 1){
                    ret += "/";
                }
            }

            return ret;
        };

        this.mailsToString = function(){
            var ret = '';

            for(var i=0;i<mails.length;i++){
                var category;


                if(mails[i].category() == 1){
                    category = 'PERSO';
                }else{
                    category = 'PRO';
                }

                ret += mails[i].address() + "["+category+"]";
                if(i!=mails.length - 1){
                    ret += "/";
                }
            }

            return ret;
        };

        this.tag = function(){
            return tag;
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