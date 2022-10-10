import L from 'leaflet';
import 'leaflet.fullscreen';

var map = L.map('map').setView([51.505, -0.09], 13);

L.control.fullscreen().addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
