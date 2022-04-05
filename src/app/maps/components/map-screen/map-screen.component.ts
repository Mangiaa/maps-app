import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-map-screen',
  templateUrl: './map-screen.component.html',
  styleUrls: ['./map-screen.component.scss']
})
export class MapScreenComponent implements OnInit {


  constructor(public placesServices: PlacesService) { }



  get isUserLocationReady(){
    return this.placesServices.isUserLocationReady;
  }


  ngOnInit(): void {
    console.log(this.placesServices.getUserLocation())

  }

  goToLocation(){
    this.placesServices.getUserLocation
  }

}
