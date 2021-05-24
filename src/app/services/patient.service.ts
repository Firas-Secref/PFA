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

  public addPatient(formData: FormData):Observable<any>{
    return this.http.post<FormData>(`${this.apiServerUrlPatient}/addPatient`, formData);
  }

  public updatePatient(patient: Patient):Observable<Patient>{
    return this.http.put<Patient>(`${this.apiServerUrlPatient}/updatePatient`, patient);
  }

  public deletePatient(id: number): Observable<any>{
    return this.http.delete<void>(`${this.apiServerUrlPatient}/deletePatient/${id}`);
  }

  public getPatientByUser(): Observable<Patient[]>{
    return this.http.get<Patient[]>(`${this.apiServerUrlPatient}`)
  }

  public getUserId(username: string): Observable<number>{
    return this.http.get<number>(`${this.apiServerUrlPatient}/getID/${username}`)
  }

  public getPatientId(username: string): Observable<number>{
    return this.http.get<number>(`${this.apiServerUrlPatient}/getPatientId/${username}`)
  }
}
