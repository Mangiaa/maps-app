import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public useLocation?: [number, number]

  get isUserLocationReady(): boolean {
    return !!this.useLocation
  }

  constructor(private http: HttpClient) {
    this.getUserLocation();
   }


  public async getUserLocation(): Promise<[number, number]> {
     return new Promise((resolve, reject) => {
       //! watchPosiition para que sea en tiempo Real
       navigator.geolocation.getCurrentPosition( (geopositions) => {
         this.useLocation = [geopositions.coords.longitude, geopositions.coords.latitude]
         resolve(this.useLocation)
        },
        (err) => {
          console.log(err)
          reject()
        })
     })
  }

  public getSearchLocation(searchText:string, proximity:string="", types:string=""){
    // const params = new HttpParams()
    //                 .set('proximity', proximity)
    //                 .set('types', types)
    return this.http.get(`${environment.apiUrl}/${searchText}.json?access_token=${environment.token}`)
    .pipe(map( (resp:any) => console.log(resp)))
    // return this.http.get(`${environment.apiUrl}/${searchText}.json?proximity=${proximity}&types=${types}&access_token=${environment.token}`)
  }
}
