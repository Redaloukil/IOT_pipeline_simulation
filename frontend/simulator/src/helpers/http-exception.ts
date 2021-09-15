import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "src/services/auth.service";
import { catchError } from 'rxjs/operators';
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService, private router:Router) { 
        //
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("request");
        return next.handle(request).pipe(catchError(err => {
            console.log(request);
            if ([401, 403].indexOf(err.status) !== -1) {
                this.authService.logout();
                this.router.navigate(['/login']);
            }
            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}