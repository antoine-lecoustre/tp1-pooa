/**
 * Created by alecoust on 18/09/15.
 */
var Contact = Contact || {};

Contact = (function(self){
    'use strict';

    self.ProxyCache = function(_listContacts){
        var cache = {};

        this.search = function(strategy){
            if(this.inCache(strategy)){
                return cache[strategy];
            }

            var inCache = null;

            for(var i=0;i<_listContacts.length;i++){

                inCache = _listContacts[i].search(strategy);

                if(inCache != null){
                    cache[strategy] = inCache;
                    break;
                }
            }

            return inCache;
        };

        this.inCache = function(strategy){
            return cache.hasOwnProperty(strategy);
        };

        var init = function(){

        };

        init();
    };

    return self;

}(Contact || {}));