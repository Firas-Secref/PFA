import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {ActionEvent} from "../states/State";
import {Patient} from "../Entity/Patient";

@Injectable({
  providedIn: 'root'
})
export class EventDrivenService {

  sourceEventSubject: Subject<Patient> = new Subject<Patient>();
  sourceEventSubjectObservable = this.sourceEventSubject.asObservable();
    constructor() { }

  publishEvent(event : Patient){
    this.sourceEventSubject.next(event);
  }
}
