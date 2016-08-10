System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Geolocator;
    return {
        setters:[],
        execute: function() {
            class Geolocator {
                constructor() {
                    if (this._isGeolocationAvailable()) {
                        this.navigator = navigator;
                    }
                    else {
                        console.log('Your browser does not support geolocation.');
                    }
                }
                getPosition() {
                    return new Promise((resolve, reject) => this.navigator.geolocation
                        .getCurrentPosition(({ coords, timestamp }) => resolve(coords), () => reject('We could not get your location.')));
                }
                _isGeolocationAvailable() {
                    return 'geolocation' in navigator;
                }
            }
            exports_1("Geolocator", Geolocator);
        }
    }
});
//# sourceMappingURL=geolocation.js.map