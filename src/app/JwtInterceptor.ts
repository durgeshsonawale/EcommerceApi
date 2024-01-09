import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the JWT token from wherever you've stored it (e.g., localStorage)
    const jwtToken = localStorage.getItem('token');
    

    if (jwtToken) {
        console.log(`Bearer ${jwtToken}`+' durgesh')
      request = request.clone({
        setHeaders: {
          authorization: `Bearer ${jwtToken}`
        
        }
      });
    }
    
    

    
    return next.handle(request).pipe(
        catchError((err) => {
            if(err){
                console.log(err);
                this.router.navigate([''])
                
            }
            
            return throwError(() => {
                console.log(err);
            });
        })
    )
  }
}
