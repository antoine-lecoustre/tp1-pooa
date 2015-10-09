/**
 * Created by alecoust on 10/09/15.
 */
var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.ContactIterator = function (_contacts) {
        var contacts;
        var pos;

        this.hasNext = function(){
            if(pos < _contacts.length - 1){
                return true;
            }else{
                return false;
            }

        };

        this.first = function(){
            return _contacts[0];
        }

        this.next = function(){
            pos++;
            return _contacts[pos];
        };

        var init = function(_contacts){
            contacts = _contacts;
            pos = -1;
        };

        init();
    };

    return self;

}(Contact || {}));