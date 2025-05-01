import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { map, catchError, Observable, throwError } from 'rxjs';
import { userAdapter } from '../adapters';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { profileRoutesConfig } from '@features/profile/config';

import { environment } from '@environment/environment.development';
import { siteRoutesConfig } from '@features/site';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseApiUrl = environment.baseApiUrl;

  private http = inject(HttpClient);
  private router = inject(Router);
  private userService = inject(UserService);

  login(identifier: string, password: string): Observable<User> {
    const url = `${this.baseApiUrl}/api/auth/local/`;
    return this.http
      .post<User>(url, {
        identifier,
        password,
      })
      .pipe(
        map((response: any) => {
          const adaptedUser = userAdapter(response);
          this.userService.saveUser(adaptedUser);
          this.router.navigate([siteRoutesConfig.base.url]);
          localStorage.setItem('user', JSON.stringify(adaptedUser.jwt));
          return adaptedUser;
        }),
        catchError((error) => {
          console.error(error);
          return throwError(
            () => new Error(error.error.error.message || 'Login failed')
          );
        })
      );
  }

  me(user: User): Observable<User> {
    const url = `${this.baseApiUrl}/api/users/me`;
    return this.http
      .get<User>(url, {
        headers: {
          Authorization: this.userService.useTokenClient(),
        },
      })
      .pipe(
        map((user) => {
          return userAdapter({ user: user, jwt: this.userService.getToken() });
        }),
        catchError((error) => {
          return throwError(() => new Error(error.message || 'Me failed'));
        })
      );
  }

  register({
    email,
    username,
    password,
  }: {
    email: string;
    username: string;
    password: string;
  }): Observable<User> {
    const url = `${this.baseApiUrl}/api/auth/local/register`;
    return this.http
      .post<User>(url, {
        email,
        username,
        password,
      })
      .pipe(
        map((user) => {
          const adaptedUser = userAdapter(user);
          this.userService.saveUser(adaptedUser);

          this.router.navigate(['/']);
          return adaptedUser;
        }),
        catchError((error) => {
          console.error(error);
          return throwError(
            () => new Error(error.error.error.message || 'Register failed')
          );
        })
      );
  }

  
}
