import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view-appointments',
  templateUrl: './view-appointments.component.html',
  styleUrls: ['./view-appointments.component.css']
})
export class ViewAppointmentsComponent implements OnInit {
  appointments: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.fetchAppointments();
  }

  fetchAppointments() {
    this.dataService.getAppointments().subscribe(
      data => {
        this.appointments = data;
      },
      error => {
        console.error('Error fetching appointments:', error);
      }
    );
  }
}
