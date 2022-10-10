import { Component, Input, OnInit } from '@angular/core';
import { Period } from '../Models/weather-api-model';

@Component({
  selector: 'app-weatherquotes',
  templateUrl: './weatherquotes.component.html',
  styleUrls: ['./weatherquotes.component.css']
})
export class WeatherquotesComponent implements OnInit {
@Input() period?: Period

  constructor() { }

  ngOnInit(): void {
  }

}
