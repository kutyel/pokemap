declare var L: any; // TODO: delete this when you have the typings

import { Geolocator } from './geolocation';

let geolocator = new Geolocator();

export async function init() {

    try {
        // show current location

        let { latitude, longitude } = await geolocator.getPosition();

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

        L.marker([latitude, longitude], { icon }).addTo(map).bindPopup(`Will despawn at ${hh}:${mm}:${ss}.`);

    } catch (err) {
        console.error(err);
    }
}
