import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  b: BehaviorSubject<Boolean>;
  constructor() {
    this.b = new BehaviorSubject<Boolean>(this.isLogedIn());
  }
  login(Email: string, password: string) {
    let token = 'iuqwdkhsdsjamxdms';
    localStorage.setItem('token', token);
    localStorage.setItem('Email', Email);
    localStorage.setItem('password', password);
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('Email');
    localStorage.removeItem('password');
  }
  isLogedIn(): boolean {
    return localStorage.getItem('token' || 'Email' || 'password')
      ? true
      : false;
  }
  lo() {
    return this.b;
  }
}
