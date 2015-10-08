/**
 * Created by alecoust on 06/10/15.
 */
var Contact = Contact || {};

Contact = (function(self){
    'use strict';

    self.Request = function(_contact){

        var contact;

        var init = function(_contact){
            contact = _contact;
        };

        this.contact = function(){
            return contact;
        };

        init(_contact);
    };

    return self;

}(Contact || {}));