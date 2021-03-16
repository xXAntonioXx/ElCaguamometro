import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { refreshTokenModel } from '../models/refreshTokenModel';
import {} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(
    private authService:AuthService,
    private router:Router
  ){}
  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const token = localStorage.getItem("authToken");
    if(token){
      
      return this.authService.validateToken(token).then((validation)=>{
        if(!validation["isValid"]){
          const refreshBody: refreshTokenModel = {
            refreshToken:localStorage.getItem("refreshToken")
          }
          return this.authService.refreshToken(refreshBody).then((tokenRefreshed)=>{
            const tokenObteinded = tokenRefreshed["accessToken"];
            const refreshTokenObteined = tokenRefreshed["refreshTokenRenovated"];
            localStorage.setItem("authToken",tokenObteinded);
            localStorage.setItem("refreshToken",refreshTokenObteined);
            return true;
          })
        }
        return validation["isValid"];
      });
    }
    this.router.navigate(["/login"]);
    return false;
    // if(token){
    //   return true;
    // }else{
    //   
    //   return false;
    // }
    
  }
}
