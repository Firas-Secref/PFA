import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Patient} from "../Entity/Patient";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private apiServerUrlPatient = environment.apiBaseUrlPatient;
  constructor(private http: HttpClient) { }

  public getPatients(): Observable<Patient[]>{
    return this.http.get<Patient[]>(`${this.apiServerUrlPatient}/getAllPatient`);
  }

  public addPatient(patient: Patient):Observable<Patient>{
    return this.http.post<Patient>(`${this.apiServerUrlPatient}/addPatient`, patient);
  }

  public updatePatient(patient: Patient):Observable<Patient>{
    return this.http.put<Patient>(`${this.apiServerUrlPatient}/updatePatient`, patient);
  }

  public deletePatient(id: number): Observable<any>{


    return this.http.delete<void>(`${this.apiServerUrlPatient}/deletePatient/${id}`);
  }
}
