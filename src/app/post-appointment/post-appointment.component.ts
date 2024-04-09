import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-post-appointment',
  templateUrl: './post-appointment.component.html',
  styleUrls: ['./post-appointment.component.css']
})
export class PostAppointmentComponent {
  appointment: {
    name: string;
    gender: string;
    phone: string;
    address: string;
    sessionDuration: string;
    cost: number;
  } = {
    name: '',
    gender: '',
    phone: '',
    address: '',
    sessionDuration: '',
    cost: 0
  };

  sessionPrices: { [key: string]: number } = {
    '1': 500,
    '4': 2000,
    '5': 5000
  };

  constructor(private dataService: DataService) { }

  calculateCost() {
    const cost = this.sessionPrices[this.appointment.sessionDuration];
    this.appointment.cost = cost !== undefined ? cost : 0;
  }

  onSubmit(formValues: any) {
    this.dataService.addAppointment(this.appointment).subscribe(response => {
      console.log('Appointment saved', response);
    // Handle the form values, such as sending them to a backend server
  });
}
}
