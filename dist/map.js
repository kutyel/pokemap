System.register(['./geolocation'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments)).next());
        });
    };
    var geolocation_1;
    var geolocator;
    function init() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // show current location
                let { latitude, longitude } = yield geolocator.getPosition();
                let map = L.map('map').setView([latitude, longitude], 13);
                L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(map);
                L.marker([latitude, longitude]).addTo(map).bindPopup("You are here.").openPopup();
                // get Pokémon
                // let pokemon = await getPokemon(latitude, longitude);
                const icon = L.icon({
                    iconUrl: 'images/1.png',
                    iconSize: [30, 30],
                    iconAnchor: [15, 15],
                    popupAnchor: [0, -10]
                });
                // calculate despawn
                const now = new Date(), hh = now.getHours(), mm = now.getMinutes(), ss = now.getSeconds();
                // add Pokémon with custom icon to map
                L.marker([latitude, longitude], { icon: icon }).addTo(map).bindPopup(`Will despawn at ${hh}:${mm}:${ss}.`);
            }
            catch (err) {
                console.error(err);
            }
        });
    }
    exports_1("init", init);
    return {
        setters:[
            function (geolocation_1_1) {
                geolocation_1 = geolocation_1_1;
            }],
        execute: function() {
            geolocator = new geolocation_1.Geolocator();
        }
    }
});
//# sourceMappingURL=map.js.map