import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-manual-booking',
  templateUrl: './manual-booking.component.html',
  styleUrls: ['./manual-booking.component.css']
})
export class ManualBookingComponent implements OnInit {

  bookingDetails? : Booking[];
  bookingDetail? : any ;
  customerId? : number = 0; 
  bookingId? : number; 
  vehicleId? : number; 
  bookingDate?:Date;
  bookVehicleId?:number;

  constructor(private bookingService : BookingService,private route: ActivatedRoute) 
  {
    this.vehicleId=this.route.snapshot.params['id'];
    this.GetDataOfCustomer()
   }

  ngOnInit(): void {
  }
    GetDataOfCustomer()
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
  
    UpdateBookingDetails(customer : any){
          let bookingData : Booking= {
            BookingId: this.bookingId,
            CustomerId : this.customerId, 
            VehicleId: this.vehicleId, 
            BookingDate : this.bookingDate, 
      }; 
      
      this.bookingService.UpdateBookingId(bookingData).subscribe(
        data => {
       
          this.GetDataOfCustomer();
  
        }
        
      );
      
    }
  
    DeleteBookingDetails(bookingId : any){
      this.bookingService.DeleteBooking(bookingId).subscribe(
        data => {
          this.GetDataOfCustomer();
        }
      );
      
    }
    InsertBookingDetails(){
      let booking : Booking= {
          BookingId: this.bookingId,
          CustomerId : this.customerId, 
          VehicleId: this.vehicleId, 
          BookingDate : this.bookingDate, 
     
      }; 
      
      this.bookingService.InsertBooking(booking).subscribe(
        data => {
           this.GetDataOfCustomer();
           this.myFunction();
        }
        
      );
      
    }
  
    onCustomerIdValueChanged(event : any){
      this.bookingDetail.BookingId= this.bookingId;
     
    }
  
    onCustomerNameValueChanged(event : any){
      this.bookingDetail.CustomerId = this.customerId;
     
    }
  
    onCityValueChanged(event : any){
      this.bookingDetail.VehicleId = this.vehicleId;
     
    }
  
    onGradeValueChanged(event : any){
      this.bookingDetail.BookingDate = this.bookingDate;
     
    }
    myFunction() {
      alert("Booking Added Succesfully");
    }

    
  
}
