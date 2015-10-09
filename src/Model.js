/**
 * Created by alecoust on 09/10/15.
 */
var Contact = Contact || {};

Contact = (function(self){
    'use strict';

    self.Model = function(){
        var init = function(){
            var contact = Contact.Contacts.instance();
        };

        init();
    };

    return self;

}(Contact || {}));