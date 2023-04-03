import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';
@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(public hardcodeAuthentication:HardcodedAuthenticationService,public router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.hardcodeAuthentication.isUserLoggedIn()){
    return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
