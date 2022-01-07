import 'babel-polyfill';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {validateIp, addTileLayer, getAddress, addOffset} from './helpers';
import icon from '../images/icon-location.svg';


const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('button');

const ipInfo = document.querySelector('#ip');
const locationInfo = document.querySelector('#location');
const timezoneInfo = document.querySelector('#timezone');
const ispInfo = document.querySelector('#isp');

btn.addEventListener('click', getData);
ipInput.addEventListener('keydown', handleKey);

const markerIcon = L.icon({
    iconUrl: icon,
    iconSize: [30, 40],
});

const mapArea = document.querySelector('.map');
const map = L.map(mapArea, {
    center: [23.444, 23.22],
    zoom: 13,
});
addTileLayer(map);


function getData() {
    // проверка данных
    if (validateIp(ipInput.value)) {
        getAddress(ipInput.value).then(showMapData)
    }
}

function handleKey(event) {
    if (event.key === 'Enter') {
        getData();
    }
}

function showMapData(mapData) {
    const {lat, lng, country, region, timezone} = mapData.location;

    ipInfo.innerText = mapData.ip;
    locationInfo.innerText = country + ', ' + region;
    timezoneInfo.innerText = timezone;
    ispInfo.innerText = mapData.isp;

    map.setView([lat, lng]);
    L.marker([lat, lng], {icon: markerIcon}).addTo(map);

    if (matchMedia("max-width: 1023").matches) {
        addOffset(map);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    getAddress().then(showMapData);
});
