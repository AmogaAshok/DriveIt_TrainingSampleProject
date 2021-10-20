import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  stringData?:any;
  customersDetails?:Customer[];
  customerDetail? : any ;
  customerId?:number;
  customerName?:string;
  dob?:string;
  phoneNo?:string;
  email?:string;
  address?:string;
  password?:string;
  isDisabledUpdate : boolean = true;
  isDisabledAdd : boolean = false;
  isDisabledId  : boolean = false; 
  isDisabledButton  : boolean = false;
  data?:any;

  constructor(private customerService:CustomerService) {
   this.GetAllCustomer();
   }

  ngOnInit(): void {
    
  }

  GetCustomerDetailsById(customerId : any){
    this.customerService.GetCustomerById(customerId).subscribe(
      data => {
        this.data=data;
        console.log(data)
        // this.stringData=JSON.stringify(data);
        // let jsonObject = {};
        // this.customerDetail= data;
        // console.log(this.customerDetail)

        this.customerId = this.data[0].CustomerId;
        console.log(data.CustomerId)
        this.customerName =this.data[0].CustomerName; 
        this.dob = this.data[0].DOB; 
        this.phoneNo = this.data[0].PhoneNo;
        this.email = this.data[0].Email;
        this.address =this.data[0].Address;
        console.log(this.address)
        
        // this.password = data.password;
      }
    );
    this.isDisabledUpdate = false;
    this.isDisabledId = true;
    this.isDisabledButton=false;
  }
  UpdateCustomerDetails(customer : any){
    
    let customerData : Customer= {
        CustomerId : this.customerId,
        CustomerName : this.customerName, 
        DOB : this.dob, 
        PhoneNo : this.phoneNo, 
        Email : this.email,
        Address : this.address
    }; 
    this.customerService.UpdateCustomerId(customerData).subscribe(
      data => {
        this.GetAllCustomer();
        this.myFuncUpdate();
      }
    );
  }

  DeleteCustomerDetails(customerId : any){
    this.customerService.DeleteCustomer(customerId).subscribe(
      data => {
        this.GetAllCustomer();
        this.myFuncDelete();
      }
    );
  }
  InsertCustomerData(){
    let customer : Customer = {
      CustomerId : this.customerId,
        CustomerName : this.customerName, 
        DOB : this.dob, 
        PhoneNo : this.phoneNo, 
        Email : this.email,
        Address : this.address
    }; 
    this.customerService.InsertCustomer(customer).subscribe(
      data => {
        this.GetAllCustomer();
        this.myFuncAdd();
      }
    );
  }
 
  GetAllCustomer(){
    this.customerService.GetAllCustomer().subscribe(
      data => {
       this.customersDetails = data;
       //console.log(data);
      }
    );
  }
  ViewCustomer(customerId? : any){
    this.customerService.GetCustomerById(customerId).subscribe(
      data => {
        this.customerDetail= data;
        this.customerId = data.CustomerId;
        this.customerName = data.CustomerName; 
        this.dob = data.DOB; 
        this.phoneNo = data.PhoneNo;
        this.email = data.Email;
        this.address = data.Address;
        // this.password = data.password;
      }
    );
    
    this.isDisabledId = true;
    this.isDisabledButton = true;
    this.isDisabledUpdate = true;
  }


  onCustomerIdValueChanged(event : any){
    this.customerDetail.CustomerId = this.customerId;
  }

  onCustomerNameValueChanged(event : any){
    this.customerDetail.CustomerName = this.customerName;
  }

  onDOBValueChanged(event : any){
    this.customerDetail.DOB = this.dob;
  }

  onPhoneNoValueChanged(event : any){
    this.customerDetail.PhoneNo = this.phoneNo;
  }

  onEmailValueChanged(event : any){
    this.customerDetail.Email = this.email; 
  }
  onAddressValueChanged(event : any){
    this.customerDetail.Address = this.address;
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
