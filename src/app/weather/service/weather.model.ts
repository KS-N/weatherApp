export class WeatherModel {
  id: number;
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
  };

  constructor(
    id: number,
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
    }
  ) {
    this.id = id;
    this.weatherInfo = weatherInfo;
  }
}
