import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-managebooking',
  templateUrl: './managebooking.component.html',
  styleUrls: ['./managebooking.component.css']
})
export class ManagebookingComponent implements OnInit {
  bookingDetails? : Booking[];
  bookingDetail? : any ;
  customerId? : number = 0; 
  bookingId? : number=0; 
  vehicleId? : number=0; 
  bookingDate?:Date;

  constructor(private bookingService : BookingService) 
  {
    this.GetDataOfBooking()
   }

  ngOnInit(): void {
  }
  GetDataOfBooking()
    {
      this.bookingService.GetAllBookings().subscribe(
        data => {
         this.bookingDetails = data;
         console.log(data);
        }
      );
    }
    ViewBookingDetailsById(bookingId : any){
      this.bookingService.ViewBookingById(bookingId).subscribe(
        data => {
          // this.customerDetail = data;
          this.bookingId = data.BookingId; 
          this.customerId = data.CustomerId;
          this.vehicleId = data.VehicleId; 
          this.bookingDate = data.BookingDate; 
        }
      );
    }
    GetBookingDetailsById(bookingId : any){
      this.bookingService.ViewBookingById(bookingId).subscribe(
        data => {
          // this.customerDetail = data;
          this.bookingId = data.BookingId; 
          this.customerId = data.CustomerId;
          this.vehicleId = data.VehicleId; 
          this.bookingDate = data.BookingDate; 
        }
      );
    }
    DeleteBookingDetails(bookingId : any){
      this.bookingService.DeleteBooking(bookingId).subscribe(
        data => {
          this.GetDataOfBooking();
          this.myFunction();
        }
      );
      
    }

  
    UpdateBookingDetails(customer : any){
          let bookingData : Booking= {
            BookingId: this.bookingId,
            CustomerId : this.customerId, 
            VehicleId: this.vehicleId, 
            BookingDate : this.bookingDate, 
      }; 
      
      this.bookingService.UpdateBookingId(bookingData).subscribe(
        data => {
       
          this.GetDataOfBooking();
  
        }
        
      );
      
    }
    myFunction() {
      alert("Deleted Data Successfully");
    }
  }
