import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/enviroments/enviroments';

interface LoginResponse {
  access_token: string;
  refresh_token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string;
  constructor(public http: HttpClient) {
    this.url = environment.baseUrl;
  }
  login({ email, password }: { email: string; password: string }) {
    // post request to the server and save the token in the local storage
    return this.http.post<LoginResponse>(`${this.url}/auth/login`, {
      email,
      password,
    });
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  isAuthenticated() {
    const token = localStorage.getItem('token');
    return !!token;
  }
  logout() {
    localStorage.removeItem('token');
  }
}
