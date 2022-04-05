import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"


@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit, AfterViewInit {



  @ViewChild('mapRef') mapRef!:ElementRef;
  mapa:any
  popUp:any

  constructor(private placesServices: PlacesService) { }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    !this.placesServices.useLocation ? console.log("Error!") : this.loadMap()

  }

  loadMap(){
    this.mapa = new mapboxgl.Map({
      container: this.mapRef.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.placesServices.useLocation, // starting position [lng, lat]
      zoom: 11 // starting zoom
    });

    this.mapa.addControl(
        new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          flyTo: {
            bearing: 0,
            // Control the flight curve, making it move slowly and
            // zoom out almost completely before starting to pan.
            speed: 1, // Make the flying slow.
            curve: 1, // Change the speed at which it zooms out.
            },
          // mapboxgl: mapboxgl
        })
      );
  }

  llamadaHttp(event:any){
    console.log(event.value)
  }



  addMarker(){

    this.popUp = new mapboxgl.Popup()
    .setHTML(`<h6> Aqui estoy </h6>
              <span> prueba <span>`)
    .addTo(this.mapa)

    const marker = new mapboxgl.Marker({
      draggable: true
      })
      .setLngLat(this.placesServices.useLocation || [0,0])
      .setPopup(this.popUp)
      .addTo(this.mapa);

      this.onDragEnd(marker)
  }

  onDragEnd(marker:any){
    const coordinates = document.getElementById('coordinates')!
    const lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
  }

}
