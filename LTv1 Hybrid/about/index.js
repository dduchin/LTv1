'use strict';

app.about = kendo.observable({
    onShow: function() {}
});
(function(parent) {
    var aboutModel = kendo.observable({
        openLink: function(url) {
            window.open(url, '_system');
            if (window.event) {
                window.event.preventDefault && window.event.preventDefault();
                window.event.returnValue = false;
            }
        }
    });

    parent.set('aboutModel', aboutModel);
})(app.about);