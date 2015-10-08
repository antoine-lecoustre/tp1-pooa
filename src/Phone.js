/**
 * Created by alecoust on 10/09/15.
 */
var Contact = Contact || {};

Contact = (function(self){
    'use strict';

    self.PhoneCategory = {PERSO: 1, PRO: 2};

    self.PhoneType = {MOBILE: 1, FIXE: 2};

    self.Phone = function(_number, _phoneCategory, _phoneType){
        var number;
        var phoneCategory;
        var phoneType;

        this.number = function(){
            return number;
        };

        this.setNumber = function(_number){
            number = _number;
        }


        this.category = function(){
            return phoneCategory;
        };

        this.type = function(){
            return phoneType;
        };

        var init = function(_number, _phoneCategory, _phoneType){
            number = _number;
            phoneCategory = _phoneCategory;
            phoneType = _phoneType;
        };

        init(_number, _phoneCategory, _phoneType);
    };

    return self;

}(Contact || {}));