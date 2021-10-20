import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup , Validators  } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  active?:number;
  loginForm! : FormGroup; 
  submitted = false;
  error = "";


  constructor(private formBuilder : FormBuilder,private authService : AuthService,private router : Router) {
    this.loginForm = this.formBuilder.group({
      username : ['',Validators.required], 
      password : ['',Validators.required]
    })
   }

  ngOnInit(): void {
  }

  get form(){
    return this.loginForm.controls; 
  }

  changeAuthAdmin(){
    this.active = 1;
  }

  changeAuthUser(){
    this.active = 2; 
  }


  onSubmit(data : any){
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }
    else{
      if(this.active == 1){
        this.authService.AdminLogin(data.username,data.password).subscribe(
          data => {
            this.router.navigate(['/admin']);
          },
          err => {
            this.error = err;
          }
        );
      }
      // else if(this.active == 3){
      //   this.authService.UserLogin(data.username,data.password).subscribe(
      //     data => {
      //       this.router.navigate(['/']);
      //     },
      //     err => {
      //       this.error = err;
      //     }
      //   );
      // }
      else if(this.active == 2){
        this.authService.UserLogin(data.username,data.password).subscribe(
          data => {
            this.router.navigate(['/User']);
          },
          err => {
            this.error = err;
          }
        );
      }
      }
    }
  }