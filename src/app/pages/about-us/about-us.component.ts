import { Component, OnInit } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps'


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  // Configuración de Google Maps 
  center = {lat: 40.657221, lng: -4.696117};
  zoom = 15;
  display?: google.maps.LatLngLiteral;
  markers = [];
  
  constructor() { }

  ngOnInit(): void {

      this.markers.push({
        position: {
          lat: this.center.lat,
          lng: this.center.lng,
        },
        label: {
          text: 'Alquilator'
        },
        options: { animation: google.maps.Animation.BOUNCE },
      })
  
  }
  
}
