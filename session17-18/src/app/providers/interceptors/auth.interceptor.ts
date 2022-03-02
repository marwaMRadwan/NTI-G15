import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler){
    const token = localStorage.getItem('g15Token')
    if(token){
      request = request.clone({
        headers: request.headers.set("Authorization", `bearer ${token}`)
      })
    }
    return next.handle(request);
  }
}
