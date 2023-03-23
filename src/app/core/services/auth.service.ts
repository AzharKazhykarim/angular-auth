import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from 'src/app/features/auth/user.model';

interface AuthResponse {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  // localId: string
  registered?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new Subject<User>();
  _token = 'token';
  constructor(private http: HttpClient) {}

  signup(emailOrPhoneNumber: string, password: string) {
    return this.http.post<AuthResponse>('http://localhost:4300/createUser', {
      emailOrPhoneNumber: emailOrPhoneNumber,
      password: password,
    });
  }

  login(emailOrPhoneNumber: string, password: string) {
    return this.http.post<AuthResponse>('http://localhost:4300/login', {
      emailOrPhoneNumber: emailOrPhoneNumber,
      password: password,
    });
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this._token);
  }

  onSaveToken(token: string): void {
    return localStorage.setItem(this._token, token);
  }
}
