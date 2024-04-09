import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ViewAppointmentsComponent } from './view-appointments/view-appointments.component';
import { PostAppointmentComponent } from './post-appointment/post-appointment.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'view-appointments', component: ViewAppointmentsComponent},
  {path: 'post-appointment', component: PostAppointmentComponent},
  {path: 'contact-us', component: ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
