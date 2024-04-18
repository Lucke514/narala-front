import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [
    GoogleMapsModule
  ],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
  // Ubicaciones para la api de google maps
  center = {lat: -30.6051752, lng: -71.202979};
  zoom = 20;

}
