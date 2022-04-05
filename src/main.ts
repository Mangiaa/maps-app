import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"




mapboxgl.accessToken = 'pk.eyJ1IjoibWFuZ2lhYSIsImEiOiJjbDEycmVhem4wMWJuM2dvMDhwbmVrMm45In0.4VwOD-_NQaeerBP3fL_xHA';


if (!navigator.geolocation) {
  alert("No soporta Geolocalizacion")
  throw new Error("Error!");
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
