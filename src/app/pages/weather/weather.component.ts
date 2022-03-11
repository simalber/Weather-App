import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { weatherData } from '../../shared/interfaces/weather.interface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherComponent {
  @Input() public weather!:weatherData;
  public base_URL = 'http://openweathermap.org/img/wn/';


}
