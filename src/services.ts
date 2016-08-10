import $ from "jquery";

export function getPokemon(lat: number, lng: number): any {

    /**
     * 172.27.1.160:80
     */
    const SERVICE = `https://cache.fastpokemap.com/?lat=${lat}&lng=${lng}`;

    return new Promise((resolve, reject) => {
        console.log('$', $);
        $.getJSON(SERVICE)
            .then(data => resolve(data))
            .fail(error => reject(error));
    });
};
