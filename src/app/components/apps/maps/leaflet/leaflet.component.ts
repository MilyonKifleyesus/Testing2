import { Component,OnInit } from '@angular/core';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import * as L from 'leaflet';
import { SharedModule } from '../../../../shared/shared.module';
@Component({
  selector: 'app-leaflet',
  standalone: true,
  imports: [SharedModule,LeafletModule],
  templateUrl: './leaflet.component.html',
  styleUrl: './leaflet.component.scss'
})

export class LeafletComponent implements OnInit {
  layers1!: L.Layer[];

  constructor() {}

  ngOnInit(): void {
    //leaflet maps 1
    const map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '© OpenStreetMap',
    }).addTo(map);

    //leaflet map 2
    const shapesmap = L.map('map1').setView([51.505, -0.09], 13);
 const markerIcon = L.icon({
  iconSize: [80, 25],
   iconAnchor: [10, 41],
   popupAnchor: [2, -40],

   iconUrl: './assets/images/brand-logos/desktop-logo.png',
   
 });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '© OpenStreetMap',
    }).addTo(shapesmap);

    const marker = L.marker([51.5, -0.09], { icon: markerIcon }).addTo(
      shapesmap
    );

   

    const circle = L.circle([51.508, -0.11], {
      color: '#00b9ff',
      fillColor: '#00b9ff',
      fillOpacity: 0.5,
      radius: 500,
    }).addTo(shapesmap);

    const polygon = L.polygon(
      [
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047],
      ],
      {
        color: '#ee335e',
        fillColor: '#ee335e',
      }
    ).addTo(shapesmap);

    //leaflet map 3
    const popupmap = L.map('map-popup').setView([51.505, -0.09], 13);

    const markerIcon1 = L.icon({
      iconSize: [80, 25],
      iconAnchor: [10, 41],
      popupAnchor: [2, -40],

     iconUrl: './assets/images/brand-logos/desktop-logo.png',
     
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '© OpenStreetMap',
    }).addTo(popupmap);

    const marker3 = L.marker([51.5, -0.09], { icon: markerIcon1 }).addTo(
      popupmap
    );
    const circle3 = L.circle([51.508, -0.11], {
      color: '#ffc102',
      fillColor: '#ffc102',
      fillOpacity: 0.5,
      radius: 500,
    }).addTo(popupmap);

    const polygon3 = L.polygon(
      [
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047],
      ],
      {
        color: '#5b67c7',
        fillColor: '#5b67c7',
      }
    ).addTo(popupmap);

    marker.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup();
    circle.bindPopup('I am a circle.');
    polygon.bindPopup('I am a polygon.');

    const standalonePopup = L.popup()
      .setLatLng([51.513, -0.09])
      .setContent('I am a standalone popup.')
      .openOn(popupmap);

    //leaflet map 4

    const customicon = L.map('map-custom-icon').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '© OpenStreetMap',
    }).addTo(customicon);

    const greenIcon = L.icon({
      iconUrl: './assets/images/brand-logos/desktop-logo.png',
      iconSize: [80, 25], // size of the icon
      iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
      popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    });

    L.marker([51.5, -0.09], { icon: greenIcon }).addTo(customicon);
  }
  // FinalMap
  options5 = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '',
      }),
      L.circle([20.5937, 78.9629], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 100,
      }),
    ],
    zoom: 5,
    center: L.latLng(20.5937, 78.9629),
  };
  layers = [
    L.circle([46.95, -122], { radius: 5000 }),
    L.polygon([
      [46.8, -121.85],
      [46.92, -121.92],
      [46.87, -121.8],
    ]),
    L.marker([46.879966, -121.726909]),
  ];
}

