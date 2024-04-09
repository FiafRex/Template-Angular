import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contact = {
    name: '',
    phone: '',
    email: '',
    message: ''
  };

  constructor(private dataService: DataService) { }

  onSubmit(formValues: any) {
    this.dataService.addContact(this.contact).subscribe(response => {
      console.log('Appointment saved', response);
    // Here you would handle sending the contact information to a server or email service.
  });
}
}
