/**
 * Created by alecoust on 06/10/15.
 */
var Contact = Contact || {};

Contact = (function(self){
    'use strict';

    self.Chain = function(_handler){
        var handler;

        var init = function(_handler){
            handler = _handler;
        };

        this.processRequest = function(_request){
            handler.handler(_request);
        };

        init(_handler);
    };

    return self;

}(Contact || {}));