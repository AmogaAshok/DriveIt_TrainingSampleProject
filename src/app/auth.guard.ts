import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService : AuthService , private router : Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isLoggedIn = this.authService.IsLoggedIn(); 
    if(isLoggedIn){
      if(route.data.role == localStorage.getItem('role')){
          return true
      }
      else{
        this.router.navigate(['/Login']);
        return false;
      }
    }
    else{
      this.router.navigate(['/Login']);
      return false;
    }
  }
  
}