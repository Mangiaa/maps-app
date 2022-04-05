import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapScreenComponent } from './components/map-screen/map-screen.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { LoadingComponent } from './components/loading/loading.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    MapScreenComponent,
    MapViewComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [MapScreenComponent]
})
export class MapsModule { }
