import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Coord, weatherData } from '../../../shared/interfaces/weather.interface';

@Injectable({ providedIn: 'root'})

export class weatherService {
  private readonly api_URL = environment.openWeather.url;

  constructor( private readonly http: HttpClient){

  }

  public getWeatherByName( city:string ): Observable<weatherData>{
    const params = new HttpParams()
    .set('q', city)
    return this.http.get<weatherData>(`${this.api_URL}/weather`, {params})
  }
  public getWeatherByCoords(coord:Coord): Observable<weatherData>{
    const params = new HttpParams()
    .set('lat', coord.latitude)
    .set('lon', coord.longitude)
    return this.http.get<weatherData>(`${this.api_URL}/weather`, {params})
  }

}
