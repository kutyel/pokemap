import { Geolocator } from './geolocation';

let geolocator = new Geolocator();

// helper function to prettify time output
function f(time) {
    return (`0${time}`).slice(-2);
}

// TODO: refactor to es2015 promises to allow compilation to es3 (mobile compatibility)
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

        const now = new Date(), 
            despawn = new Date(), // TODO: this should come from the API and its unique per Pokémon
            diff = (despawn.getTime() - now.getTime()) / 1000,
            mm = Math.floor(diff / 60),
            ss = (diff - mm * 60).toFixed();

        // add Pokémon with custom icon to map

        L.marker([latitude, longitude], { icon }).addTo(map).bindPopup(`Will despawn in ${f(mm)}:${f(ss)}.`);

    } catch (err) {
        console.error(err);
    }
}
