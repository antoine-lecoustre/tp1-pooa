/**
 * Created by alecoust on 06/10/15.
 */
var Contact = Contact || {};

Contact = (function(self){
    'use strict';

    self.Handler = function(_contacts, _handler){
        var contacts;
        var handler;

        var init = function(_contacts, _handler){
            contacts = _contacts;
            handler = _handler;
        };

        this.handler = function(_request){
            var requestContact = _request.contact();

            if(contacts.size() == 0){
                contacts.add(requestContact);
            }else if (contacts.search(new Contact.FromTagSearchStrategy(requestContact.tag())) !== null) {
                contacts.add(requestContact);
            }else if(handler != null) {
                handler.handler(_request);
            }
        };

        init(_contacts, _handler);
    };

    return self;

}(Contact || {}));