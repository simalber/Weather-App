import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { weatherService } from './pages/weather/services/weather.service';
import { weatherData } from './shared/interfaces/weather.interface';
import { GeoLocationService } from './shared/services/geolocation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  public weather$!: Observable<weatherData>;
  constructor( private readonly weatherSvc:weatherService,
               private readonly geoLocationSvc: GeoLocationService){
      if (navigator.geolocation){
        this.getLocation();
      }

  }


  onSearch(city: string): void {
    this.weather$ = this.weatherSvc.getWeatherByName(city);

  }

  private async getLocation(): Promise <void>{
    try{
      const { coords } = await this.geoLocationSvc.getCurrentPosition();
      console.log(coords);
      this.weather$ = this.weatherSvc.getWeatherByCoords(coords);


    }catch(error){
      console.log(error);

    }

  }

}
