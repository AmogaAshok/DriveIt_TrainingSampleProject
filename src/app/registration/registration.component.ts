import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  customerDetails? :Customer[];
  customerdetail?:any;
  customerId? : number; 
  customerName? : string;
  dob?:string; 
  address ?: string; 
  password?:string;
  contactNo?:string;
  email?:string;   
  constructor(private customerService : CustomerService) 
  {
    this.GetDataOfCustomer()
   }

  ngOnInit(): void {
  }
    GetDataOfCustomer()
    {
      this.customerService.GetAllCustomer().subscribe(
        data => {
         this.customerDetails = data;
         console.log(data);
        }
      );
    }
    InsertBookingDetails(){
      this.myFunction() 
      let customer : Customer= {
          CustomerId: this.customerId,
          CustomerName: this.customerName,
          DOB:this.dob,
          Email:this.email,
          PhoneNo :this.contactNo,
          password:this.password,
          Address:this.address,
         
      }; 
      
      this.customerService.InsertCustomer(customer).subscribe(
        data => {
          
         
        }
        
      );
      
    }
  
    // onCustomerIdValueChanged(event : any){
    //   this.customerdetail.CustomerId= this.customerId;
     
    // }
  
    onCustomerNameValueChanged(event : any){
      this.customerdetail.CustomerName = this.customerName;
     
    }
  
    onCityValueChanged(event : any){
      this.customerdetail.DOB = this.dob;
     
    }
  
    onGradeValueChanged(event : any){
      this.customerdetail.Email = this.email;
     
    }
    onGradValueChanged(event : any){
      this.customerdetail.Password = this.password;
     
    }
    onGraValueChanged(event : any){
      this.customerdetail.ContactNo = this.contactNo;
     
    }
    onGrValueChanged(event : any){
      this.customerdetail.Address = this.address;
     
    }
    myFunction() {
      alert("WELCOME TO DRIVEIT!...U Have successfully registered");
    }
  }

