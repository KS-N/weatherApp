import { Component, OnInit } from '@angular/core';
import { WeatherModel } from './service/weather.model';
import { WeatherService } from './service/weather.service';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.scss'],
})
export class WeatherHomeComponent implements OnInit {
  currentWeather!: WeatherModel[];
  filterText = '';
  constructor(private service: WeatherService) {}

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather() {
    this.service.getCurrentWeather().subscribe((res) => {
      this.currentWeather = res;
      console.log(res);
    });
  }
}
