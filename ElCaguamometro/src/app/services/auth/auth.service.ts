import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { login } from '../../models/login';
import { refreshTokenModel } from '../../models/refreshTokenModel';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authURL:string = "http://localhost:3000/Auth";
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
  
  getToken(userCredentials: login) : any{
    const httpOptions : any    = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };
    const getTokenURL = `${this.authURL}/login`;
    this.http.post<any>(getTokenURL,userCredentials,httpOptions)
      .subscribe((token) => {
        const tokenObteinded = token["accessToken"];
        const refreshTokenObteined = token["refreshToken"];
        localStorage.setItem("authToken",tokenObteinded);
        localStorage.setItem("refreshToken",refreshTokenObteined);
        this.router.navigate(["/"]);
      });
  }

  validateToken(token: string) : any{
    const httpOptions : any    = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'authorization': token
      })
    };
    const validateTokenURL = `${this.authURL}/auth/validateToken`;
    return this.http.get<any>(validateTokenURL,httpOptions).toPromise();
  }

  refreshToken(refreshToken: refreshTokenModel) : any{
    const httpOptions : any    = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    const refreshTokenURL = `${this.authURL}/refreshToken`;
    return this.http.post<any>(refreshTokenURL,refreshToken,httpOptions).toPromise()
  }
}
