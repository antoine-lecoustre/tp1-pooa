/**
 * Created by alecoust on 09/10/15.
 */
var Contact = Contact || {};

Contact = (function(self){
    'use strict';

    self.View = function(_model){
        var model;

        var init = function(_model){
            var table = $('<table />');

            table.appendTo($('#contacts'));

            var line = $('<tr/>');

            $('<th/>', {id: 'cellFirstName', html : "First name"}).appendTo(line);
            $('<th/>', {id: 'cellLastName', html : "Last name"}).appendTo(line);
            $('<th/>', {id: 'cellPhones', html : "Phones"}).appendTo(line);
            $('<th/>', {id: 'cellMails', html : "Mails"}).appendTo(line);
            $('<th/>', {id: 'cellTags', html : "Tags"}).appendTo(line);
            $('<th/>', {id: 'cellActions', html : "Actions"}).appendTo(line);

            line.appendTo(table);

            var it = Contact.Contacts.instance().iterator();

            while (it.hasNext()) {
                var contact = it.next();

                if (contact) {
                    line = $('<tr/>', {id: 'x' + contact.id()});

                    $('<td/>', {id: 'cellFirstName', html : contact.firstName()}).appendTo(line);
                    $('<td/>', {id: 'cellLastName', html : contact.lastName()}).appendTo(line);
                    $('<td/>', {id: 'cellPhones', html : contact.phonesToString()}).appendTo(line);
                    $('<td/>', {id: 'cellMails', html : contact.mailsToString()}).appendTo(line);
                    $('<td/>', {id: 'cellTags', html : contact.tag()}).appendTo(line);

                    line.appendTo(table);
                }
            }



        };

        init(_model);
    };

    return self;

}(Contact || {}));