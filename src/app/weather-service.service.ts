import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Period, WeatherForcast } from './Models/weather-api-model';


@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {


  constructor(private httpClient: HttpClient) { }

  getWeather(): Observable<WeatherForcast> {
    return this.httpClient.get<WeatherForcast>("https://api.weather.gov/gridpoints/DTX/65,33/forecast");
  }



}
