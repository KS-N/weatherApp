import { Component, Input, OnInit } from '@angular/core';
import { WeatherModel } from '../../service/weather.model';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent implements OnInit {
  @Input() currentWeather!: WeatherModel[];
  filterText = '';
  constructor() {}

  ngOnInit(): void {}
}
