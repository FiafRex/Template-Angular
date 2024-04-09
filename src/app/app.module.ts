import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ViewAppointmentsComponent } from './view-appointments/view-appointments.component';
import { PostAppointmentComponent } from './post-appointment/post-appointment.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import { HtmlParser } from '@angular/compiler';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ViewAppointmentsComponent,
    PostAppointmentComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
