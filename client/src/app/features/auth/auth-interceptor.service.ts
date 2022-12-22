import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {finalize, Observable} from "rxjs";
import {LoaderService} from "../freelancer/services/loader.service";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
    
    constructor(private loaderService: LoaderService) {}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
            this.loaderService.isLoading.next(true)
            
            if(localStorage.length > 0) {
                let token  = localStorage.getItem('authToken')

                if(token && token.includes('"')) {
                    //cut the quotes
                    token = token.slice(1, token.length - 1)
                }

                if(token !== null) {
                    const modifiedRequest = req.clone({headers: req.headers.append('x-authorization', token)})
                    return next.handle(modifiedRequest).pipe(finalize(()=>{
                        this.loaderService.isLoading.next(false)
                    }))
                }
            }
            
        return next.handle(req).pipe(finalize(()=>{
            this.loaderService.isLoading.next(false)
        }))
    }
}