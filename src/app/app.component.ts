import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
/*  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] */
  styles: [`
    agm-map {
      height: 300px;
    }
  `],
  template: `
  <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom" >
  	<agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>
  </agm-map>
  `
})
export class AppComponent implements OnInit {
	ngOnInit() {

	    if (window.navigator && window.navigator.geolocation) {
	        window.navigator.geolocation.getCurrentPosition(
	            position => {
	                this.lat = position.coords.latitude,
	                this.lng = position.coords.longitude,
	                    console.log(position)
	            },
	            error => {
	                switch (error.code) {
	                    case 1:
	                        console.log('Permission Denied');
	                        break;
	                    case 2:
	                        console.log('Position Unavailable');
	                        break;
	                    case 3:
	                        console.log('Timeout');
	                        break;
	                }
	            }
	        );
	    };
	}


  title = 'app';
  lat: number = 51.678418;
  lng: number = 7.809007;
  zoom: number = 12;
}
