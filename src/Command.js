/**
 * Created by alecoust on 18/09/15.
 */
var Contact = Contact || {};

Contact = (function(self){
    'use strict';

    self.AddCommand = function(){
        var contact;

        this.execute = function(_contact){
            contact = _contact;
            Contact.Contacts.instance().add(contact);
        };

        this.undo = function(){
            Contact.Contacts.instance().remove(contact.id());
        };

        var init = function(){

        };

        init();

    };

    self.RemoveCommand = function(){
        var contact;

        this.execute = function(_id){
            contact = Contact.Contacts.instance().get(_id);
            Contact.Contacts.instance().remove(_id);

        };

        this.undo = function(){
            Contact.Contacts.instance().add(contact);
        };

        var init = function(){

        };

        init();
    };

    return self;

}(Contact || {}));