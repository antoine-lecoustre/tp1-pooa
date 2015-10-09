/**
 * Created by alecoust on 09/10/15.
 */
var Contact = Contact || {};

Contact = (function(self){
    'use strict';

    self.Controller = function(_model, _view){
        var model;
        var view;

        var init = function(_model, _view){
            model = _model;
            view = _view;
        };

        init(_model, _view);
    };

    return self;

}(Contact || {}));