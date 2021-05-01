import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Location} from "../Entity/Location";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private apiServerUrlLocation = environment.apiBaseUrlLocation;

  constructor(private http: HttpClient) { }

  public addLocation(location: Location): Observable<Location>{
    return this.http.post<Location>(`${this.apiServerUrlLocation}/addLocation`, location);
  }

  public getLocation(id: number): Observable<Location>{
    return this.http.get<Location>(`${this.apiServerUrlLocation}/location/${id}`);
  }

  public getLocations(): Observable<Location[]>{
    return this.http.get<Location[]>(`${this.apiServerUrlLocation}/allLocation`);
  }

  public getLocationByLatLng(lat: number, lng: number): Observable<Location>{
    return this.http.get<Location>(`${this.apiServerUrlLocation}/getLoc/${lat}/${lng}`);
  }

  public deleteLocation(id: number): Observable<any>{
    return this.http.delete<void>(`${this.apiServerUrlLocation}/deleteLocation/${id}`);
  }
}
