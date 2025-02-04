import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthData, AuthResponse, AuthUser } from '../../shared/types/auth-types';
import { BehaviorSubject, filter, map, throwError } from 'rxjs';
import { StorageService } from '../../shared/services/storage.service';

const API_URL = 'http://localhost:1337';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  storageService = inject(StorageService);

  private _auth = new BehaviorSubject<AuthData>({ status: 'waiting' });

  constructor() {
    this.checkCurrentUser().subscribe({
      next: (response) => this._auth.next({ status: 'logged', user: response }),
      error: () => this._auth.next({ status: 'not-logged' }),
    });
  }

  checkCurrentUser() {
    const token = this.storageService.getItem('token');
    if (!token) return throwError(() => new Error('no token'));

    return this.http
      .get<AuthResponse['user']>(API_URL + '/api/users/me', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .pipe(map((response) => this.responseUserToAuthUser(token, response)));
  }

  login(user: string, password: string) {
    this.http.post<AuthResponse>(API_URL + '/api/auth/local', { identifier: user, password }).subscribe((response) => {
      this.storageService.setItem('token', response.jwt);
      this._auth.next({ status: 'logged', user: this.responseUserToAuthUser(response.jwt, response.user) });
    });
  }

  logout() {
    this.storageService.removeItem('token');
    this._auth.next({ status: 'not-logged' });
  }

  private responseUserToAuthUser(token: string, response: AuthResponse['user']): AuthUser {
    return {
      token,
      id: response.id,
      username: response.username,
      email: response.email,
    };
  }

  get auth() {
    return this._auth.asObservable();
  }

  get authStatus() {
    return this.auth.pipe(map((item) => item.status));
  }

  get authUser() {
    return this.auth.pipe(
      filter((item) => item.status === 'logged'),
      map((item) => item.user),
    );
  }

  get isLogged() {
    return this.auth.pipe(map((item) => item.status === 'logged'));
  }
}
