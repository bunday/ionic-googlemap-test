import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  Marker,
  LocationService
} from '@ionic-native/google-maps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  map:GoogleMap;
  latitude: any = 8.561542;
  longitude: any = 7.351373;
  constructor(public navCtrl: NavController) {
    setTimeout(this.loadMap.bind(this),2000);
  }
  loadMap(){
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: this.latitude,
          lng: this.longitude
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = GoogleMaps.create('mapperFacade', mapOptions)
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        this.map.addMarker({
          title: 'Prospect Location',
          icon: 'blue',
          animation: 'DROP',
          position: {
            lat: this.latitude,
            lng: this.longitude
          }
        })
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {

              });
          });

      });
  }

}
