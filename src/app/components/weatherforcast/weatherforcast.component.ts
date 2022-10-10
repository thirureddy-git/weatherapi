import { Component, OnInit } from '@angular/core';
import { Period } from 'src/app/Models/weather-api-model';
import { WeatherServiceService } from 'src/app/weather-service.service';

@Component({
  selector: 'app-weatherforcast',
  templateUrl: './weatherforcast.component.html',
  styleUrls: ['./weatherforcast.component.css']
})
export class WeatherforcastComponent implements OnInit {

period: Period[] = [];

  constructor(private weatherApiService: WeatherServiceService) { }

  ngOnInit(): void {
    this.weatherApiService.getWeather().subscribe((period) => {
     // console.log(period);
     this.period = period.properties.periods;
    })
  }

}
