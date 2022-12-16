import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import * as module from "module";

export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        if( !req.url.includes('http://localhost:3030/freelancersData/freelancers') || (req.url.includes('http://localhost:3030/freelancersData/freelancers') && req.method === 'POST')  ) {
           
            console.log('Request URL  from the interceptor >>> ', req.url)
            console.log('Request Method >>> ', req.method)
            
            let token  = localStorage.getItem('authToken')
            
            if(token && token.includes('"')) {
                //cut the quotes
                token = token.slice(1, token.length - 1)
            }
            
            console.log('Token from Auth-Interceptor >>> ', token)
           
            if(token !== null) {
                const modifiedRequest = req.clone({headers: req.headers.append('x-authorization', token)})
                return next.handle(modifiedRequest);
            }
        }
        return next.handle(req)
    }
}