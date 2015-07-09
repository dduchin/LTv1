'use strict';

(function() {
    app.data.defaultProvider = new Everlive({
        offlineStorage: true,
        apiKey: 'ispNTjxgXpv30NvF',
        scheme: 'https'
    });

    document.addEventListener("online", function() {
        app.data.defaultProvider.offline(false);
        app.data.defaultProvider.sync();
    });

    document.addEventListener("offline", function() {
        app.data.defaultProvider.offline(true);
    });

}());