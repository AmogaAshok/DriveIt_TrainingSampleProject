import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url : string ="https://localhost:44362/api/customer";
  constructor(private http:HttpClient) { }

  GetAllCustomer():Observable<Customer[]>{
    return this.http.get<Customer[]>(this.url+"/GetAllCustomer");
  }
  GetCustomerById(customerId : number) : Observable<Customer>{
    return this.http.get<Customer>(this.url+"/GetCustomerById/"+customerId);
  }
  UpdateCustomerId(customer : Customer) : Observable<Customer> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put< Customer>(this.url+"/updateCustomer/"+customer.CustomerId,customer,httpOptions);
  }
  InsertCustomer(customer : Customer) : Observable<Customer>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Customer>(this.url+"/AddCustomer",customer,httpOptions);
  }
  DeleteCustomer(customerId : number) : Observable<Customer>{
    return this.http.delete(this.url+"/deletecustomer/"+customerId);
  }
}
