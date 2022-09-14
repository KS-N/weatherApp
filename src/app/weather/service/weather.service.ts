import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { WeatherModel } from './weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  realTime: WeatherModel[] = [];

  url =
    'https://api.openweathermap.org/data/2.5/group?id=2643741,2644688,2633352,2654675,2988507,2990969,2911298,2925535,2950159,3120501,3128760,5128581,4140963,4930956,5106834,5391959,5368361,5809844,4099974,4440906&appid=e23b003c9575e6b5a014303de167a357&units=metric';

  constructor(private http: HttpClient) {}

  getCurrentWeather(): Observable<WeatherModel[]> {
    return this.http.get(this.url).pipe(
      map((res: any) => {
        console.log(res);
        return res.list.map(
          (
            weatherInfo: {
              coord: {
                lat: number;
                lon: number;
              };
              main: {
                humidity: number;
                temp: number;
              };
              name: string;
              sys: {
                country: string;
                timezone: number;
              };
            },
            id: number
          ) => {
            return new WeatherModel(id, weatherInfo);
          }
        );
      })
    );
  }
}
