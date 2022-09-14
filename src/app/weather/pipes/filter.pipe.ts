import { Pipe, PipeTransform } from '@angular/core';
import { WeatherModel } from '../service/weather.model';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  transform(
    currentWeather: WeatherModel[],
    filterText: string
  ): WeatherModel[] {
    if (!currentWeather || !filterText) {
      return currentWeather;
    }
    return currentWeather.filter((currentWeather) =>
      currentWeather.weatherInfo.name
        .toLocaleLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  }
}
