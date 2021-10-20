import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-car-availability',
  templateUrl: './car-availability.component.html',
  styleUrls: ['./car-availability.component.css']
})
export class CarAvailabilityComponent implements OnInit {
  
  vehicleDetails? : Vehicle[];
  vehicleDetail? : any ;
  vehicleId? : number = 0; 
  vehicleName? : string = ""; 
  vehicleType? : string = ""; 
  vehiclePrice? : number = 0; 
  vehicleImage? : string = ""; 
  vehicleAvailability? : string = "";
  isDisabled? : boolean = true;
  name? : string; 
  viewDisabled? : boolean = false;
  data?:any;
  constructor(private carService : VehicleService ){ 
  this.GetAllVehicleDetails();
  }

  ngOnInit(): void {
  }
  GetVehicleDetailsById(vehicleId : any){
    this.carService.GetVehicleById(vehicleId).subscribe(
      data => {
        this.data=data;
        this.vehicleDetail = data;
        this.vehicleId = this.data[0].VehicleId;
        this.vehicleName =  this.data[0].VehicleName; 
        this.vehicleType = this.data[0].VehicleType; 
        this.vehiclePrice = this.data[0].VehiclePrice;
        this.vehicleImage =  this.data[0].VehicleImage;
        this.vehicleAvailability =  this.data[0].VehicleAvailability;
      }
    );
    this.isDisabled = false;
  }

  UpdateVehicleDetails(vehicle : any){
    let vehicleData : Vehicle= {
        VehicleId : this.vehicleId,
        VehicleName : this.vehicleName, 
        VehicleType : this.vehicleType, 
        VehiclePrice : this.vehiclePrice, 
        VehicleImage : this.vehicleImage,
        VehicleAvailability : this.vehicleAvailability
    }; 
    
    this.carService.UpdateVehicleId(vehicleData).subscribe(
      data => {
        this.GetAllVehicleDetails();
        this.myFuncUpdate();
      }
    );
    // this.customerService.GetAllCustomers().subscribe(
    //   data => {
    //    this.customerDetails = data;
    //     console.log(data);
    //   }
    // );
    
  }

  DeleteVehicleDetails(vehicleId : any){
    this.carService.DeleteVehicle(vehicleId).subscribe(
      data => {
        this.GetAllVehicleDetails();
        this.myFuncDelete();
      }
    );
    
  }

  onVehicleIdValueChanged(event : any){
    this.vehicleDetail.VehicleId= this.vehicleId;
   
  }

  onVehicleNameValueChanged(event : any){
    this.vehicleDetail.VehicleName = this.vehicleName;
   
  }

  onVehicleTypeValueChanged(event : any){
    this.vehicleDetail.VehicleType = this.vehicleType;
   
  }

  onVehiclePriceValueChanged(event : any){
    this.vehicleDetail.VehiclePrice = this.vehiclePrice;
   
  }

  onVehicleImageValueChanged(event : any){
    this.vehicleDetail.VehicleImage = this.vehicleImage;
   
  }

  onVehicleAvailabilityValueChanged(event : any){
    this.vehicleDetail.VehicleAvailability = this.vehicleAvailability;
   
  }

  InsertVehicleData(){
    let vehicle : Vehicle = {
      VehicleId : this.vehicleId, 
      VehicleName : this.vehicleName, 
      VehicleType: this.vehicleType,
      VehicleImage: this.vehicleImage, 
      VehiclePrice : this.vehiclePrice,
      VehicleAvailability : this.vehicleAvailability
    }; 
    this.carService.InsertVehicle(vehicle).subscribe(
      data => {
        this.GetAllVehicleDetails();
        this.myFuncAdd();
      }
    );
  }

  GetAllVehicleDetails(){
    this.carService.GetAllVehicles().subscribe(
      data => {
       this.vehicleDetails = data;
       //console.log(data);
      }
    );
  }

  ViewVehicle(vehicleId? : any){
    this.carService.GetVehicleById(vehicleId).subscribe(
      data => {
        this.vehicleDetail = data;
        this.vehicleId = data.VehicleId;
        this.vehicleName = data.VehicleName; 
        this.vehicleType = data.VehicleType; 
        this.vehiclePrice = data.VehiclePrice;
        this.vehicleImage = data.VehicleImage;
        this.vehicleAvailability = data.VehicleAvailability;
      }
    );
    this.viewDisabled = true;
  }
  myFuncUpdate() {
    alert("Updated Data Successfully");
  }
  myFuncDelete() {
    alert("Deleted Data Successfully");
  }
  myFuncAdd() {
    alert("Added Data Successfully");
  }
}
