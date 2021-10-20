import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  vehicleDetails? : Vehicle[];
  // vehicleDetail? : any ;
  // vehicleName?:string;
   vehicleId? : number; 
  // vehiclePrice? : number=0; 
  // vehicleAvailability?:string;
  // vehicleImage?:string;
  

  constructor(private vehicleService : VehicleService) 
  {
    this.GetVehicles()
   }

  ngOnInit(): void {
  }
  
    GetVehicles()
    {
      this.vehicleService.GetAllVehicles().subscribe(
        data => {
         this.vehicleDetails = data;
         console.log(data);
        }
      );
    }
    
 }

