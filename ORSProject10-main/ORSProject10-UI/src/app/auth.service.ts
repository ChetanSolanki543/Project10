import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: "root",
})
export class AuthService implements HttpInterceptor {
  constructor(private http: HttpServiceService) {}

  // :Observable<HttpEvent<any>>

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    req = req.clone({
      setHeaders: {
        withCredentials: "true",
        name: "Chetan",
      },
    });

    return next.handle(req);
  }
}