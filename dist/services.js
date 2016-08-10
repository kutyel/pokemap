System.register(["jquery"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var jquery_1;
    function getPokemon(lat, lng) {
        /**
         * 172.27.1.160:80
         */
        const SERVICE = `https://cache.fastpokemap.com/?lat=${lat}&lng=${lng}`;
        return new Promise((resolve, reject) => {
            console.log('$', jquery_1.default);
            jquery_1.default.getJSON(SERVICE)
                .then(data => resolve(data))
                .fail(error => reject(error));
        });
    }
    exports_1("getPokemon", getPokemon);
    return {
        setters:[
            function (jquery_1_1) {
                jquery_1 = jquery_1_1;
            }],
        execute: function() {
            ;
        }
    }
});
//# sourceMappingURL=services.js.map