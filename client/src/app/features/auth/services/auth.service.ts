import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

    register(email: string, password: string) {
        return this.http
            .post<any>(
                'http://localhost:3030/users/register',
                {
                    email: email,
                    password: password,
                }
            )
    }

    login(email: string, password: string) {
        return this.http
            .post<any>(
                'http://localhost:3030/users/login',
                {
                    email: email,
                    password: password,
                }
            )
    }
}
