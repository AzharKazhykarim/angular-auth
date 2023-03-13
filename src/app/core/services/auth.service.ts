import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';
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

  constructor(private http: HttpClient) {}

  signup(emailOrPhoneNumber: string, password: string) {
    return this.http.post<AuthResponse>('https://', {
      emailOrPhoneNumber: emailOrPhoneNumber,
      password: password,
    })
  }

  login(emailOrPhoneNumber: string, password: string) {
    return this.http.post<AuthResponse>('https://', {
      emailOrPhoneNumber: emailOrPhoneNumber,
      password: password,
    });
  }
}
