import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  url : string ="https://localhost:44362/api/Vehicle";
  
  constructor(private http :HttpClient) { }
  GetAllVehicles()  {
    return this.http.get<Vehicle[]>(this.url+'/getAllVehicles');
  }
  GetVehicleById(vehicleId : number) : Observable<Vehicle> {
    return this.http.get<Vehicle>(this.url+'/getVehicleById/'+vehicleId);
  }
  UpdateVehicleId(Car : Vehicle) : Observable<Vehicle>  {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<Vehicle>(this.url+"/updateVehicles/"+Car.VehicleId,Car,httpOptions);
  }
  InsertVehicle(vehicle : Vehicle) : Observable<Vehicle>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Vehicle>(this.url + "/insertVehicles",vehicle,httpOptions);
  }
  DeleteVehicle(vehicleId : number) : Observable<Vehicle>{
    return this.http.delete(this.url+'/deleteVehicles/'+vehicleId);
  }
}
