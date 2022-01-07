import L from "leaflet";

export function addTileLayer(map) {
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGVuZXIxMjMiLCJhIjoiY2t5NGFrbzh5MDl5bjJycHEwdjhuMzVnMyJ9.UNrwciL8zV0wNSDT0DGM6Q', {
        attribution: `    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                      Coded by <a href="#">Your Name Here</a>.`,
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
    }).addTo(map);
}