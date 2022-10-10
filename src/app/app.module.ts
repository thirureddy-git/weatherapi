import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeatherforcastComponent } from './components/weatherforcast/weatherforcast.component';
import { WeatherquotesComponent } from './weatherquotes/weatherquotes.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherforcastComponent,
    WeatherquotesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
