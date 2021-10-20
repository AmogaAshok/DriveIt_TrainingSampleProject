import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  active = 1;
  role! : string; 
  isUserLoggedIn? : boolean; 
  constructor(private authService : AuthService, private router : Router) { 
    this.isUserLoggedIn = this.authService.IsLoggedIn();
    if(this.isUserLoggedIn){
      this.role = localStorage.getItem('role')!;
    }
  }

  get UserLoggedIn(){
    return this.authService.IsLoggedIn();
  }

  get getRole(){
    return this.authService.GetRole(); 
  }

  ngOnInit(): void {
   
  }

  logout(){
    this.authService.logout(); 
    this.router.navigate(['/'])
  }

}

