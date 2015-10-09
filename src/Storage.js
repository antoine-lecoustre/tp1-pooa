/**
 * Created by alecoust on 06/10/15.
 */
var Contact = Contact || {};

Contact = (function(self){
    'use strict';

    self.Storage = {
        instance : function () {
            if (pInstance == null) {
                pInstance = new Storage();
            }
            return pInstance;
        }
    };

    var Storage = function(){
        this.save = function(_contacts){
            
        };
    };

    return self;

}(Contact || {}));