import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://localhost:3000'; // URL to web api

  constructor(private http: HttpClient) { }

  // Get all appointments
  getAppointments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/appointments`);
  }

  // Add a new appointment
  addAppointment(appointment: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/appointments`, appointment);
  }

  // Get all contact messages
  getContacts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/contacts`);
  }

  // Add a new contact message
  addContact(contact: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/contacts`, contact);
  }
}
