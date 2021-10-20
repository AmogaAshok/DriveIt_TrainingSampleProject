import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CarComponent } from './car/car.component';
import { BikeComponent} from './bike/bike.component';
import { HeaderComponent } from './header/header.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { BikeAvailabilityComponent } from './bike-availability/bike-availability.component';
import { ManagebookingComponent } from './managebooking/managebooking.component';
import { CarAvailabilityComponent } from './car-availability/car-availability.component';
import { CustomersComponent } from './customers/customers.component';
import { MyBookingComponent } from './my-booking/my-booking.component';
import { ManualBookingComponent } from './manual-booking/manual-booking.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginGuard } from './login.guard';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { UserComponent } from './user/user.component';

const routes: Routes = [
   // { path:'', component:IndexComponent },
   // { path:'Login', component:LoginComponent,canActivate : [LoginGuard]},
   // { path:'Register', component:RegistrationComponent },
   // { path:'Index', component:IndexComponent },
   // { path:'ContactUs', component:ContactusComponent },
   
   // { path:'NavBar', component:NavBarComponent,canActivate : [AuthGuard],data : {role:'Admin'},children:[
   //    // { path:'NavBar', component:NavBarComponent },
   //    // { path:'', component:GridListComponent },
   //    { path:'CarsAvailable', component:CarAvailabilityComponent },
   //    { path:'Car', component:CarComponent },
   //    { path:'Customers', component:CustomersComponent },
   //    { path:'ManualBooking', component:ManualBookingComponent },
   //    { path:'BookingDetails', component:ManagebookingComponent },
   //    { path:'ManagerRegistration', component:RegistrationComponent }
   // ]},
   // { path:'', component:CarComponent,canActivate : [AuthGuard],data : {role:'User'},children : [
   //    { path:'MyBooking', component:MyBookingComponent },
   //    { path:'Car', component:CarComponent },
   //    { path:'Bike', component:BikeComponent },
   //    { path:'Dashboard', component:CarComponent }
      
   //  ]},
   { path:'', component:IndexComponent },
   { path:'Login', component:LoginComponent,canActivate : [LoginGuard]},
   { path:'Register', component:RegistrationComponent },
   { path:'Index', component:IndexComponent },
   { path:'ContactUs', component:ContactusComponent },
   
   {path:'admin',component : AdminComponent,canActivate : [AuthGuard],data : {role:'Admin'},children:[
    
      { path:'Dash', component:GridListComponent },
      { path:'CarsAvailable', component:CarAvailabilityComponent },
      { path:'Car', component:CarComponent },
      { path:'Customers', component:CustomersComponent },
      { path:'ManualBooking', component:ManualBookingComponent },
      { path:'BookingDetails', component:ManagebookingComponent },
      { path:'ManagerRegistration', component:RegistrationComponent }
   ]},
   { path : 'User',component : UserComponent,canActivate : [AuthGuard],data : {role:'User'},children : [
      { path:'', component:CarComponent },
      { path:'MyBooking', component:MyBookingComponent },
      { path:'ManualBooking', component:ManualBookingComponent },
      { path:'ManualBookingUser/:id', component:ManualBookingComponent },
      { path:'Bike', component:BikeComponent },
      { path:'Dashboard', component:CarComponent}
      
    ]},
  ];

   //  { path:'Index', component:IndexComponent },


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents=[LoginComponent,BikeComponent,CarComponent,ContactusComponent,RegistrationComponent,IndexComponent]
