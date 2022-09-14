import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { WeatherHomeComponent } from './weather-home.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';

@NgModule({
  declarations: [WeatherHomeComponent, FilterPipe, WeatherCardComponent],
  imports: [CommonModule, HttpClientModule, FormsModule],
})
export class WeatherModule {}
