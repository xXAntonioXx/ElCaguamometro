import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authToken = localStorage.getItem("authToken");
    if(!authToken){
      return next.handle(request);
    }
    const requestWithAuthHeader = request.clone({
      headers: request.headers.set("authorization",`Bearer ${authToken}`)
    });
    return next.handle(requestWithAuthHeader);
  }
}
