import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { IndexComponent } from './index/index.component';
import { ManagebookingComponent } from './managebooking/managebooking.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HeaderComponent } from './header/header.component';
import { CarComponent } from './car/car.component';
import { BikeComponent } from './bike/bike.component';
import { BikeAvailabilityComponent } from './bike-availability/bike-availability.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ManagerRegisterComponent } from './manager-register/manager-register.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { CarAvailabilityComponent } from './car-availability/car-availability.component';
import { CustomersComponent } from './customers/customers.component';
import { MyBookingComponent } from './my-booking/my-booking.component';
import { ManualBookingComponent } from './manual-booking/manual-booking.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    IndexComponent,
    ManagebookingComponent,
    ContactusComponent,
    HeaderComponent,
    CarComponent,
    BikeComponent,
    BikeAvailabilityComponent,
    NavBarComponent,
    ManagerRegisterComponent,
    GridListComponent,
    CarAvailabilityComponent,
    CustomersComponent,
    MyBookingComponent,
    ManualBookingComponent,
    AdminComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
