import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCTRWH46Je8oi7m3Fy7HXNqFHAQI11DYOs'
    })    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
