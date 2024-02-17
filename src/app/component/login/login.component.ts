import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  @ViewChild('Email') Email!: ElementRef<HTMLInputElement>;
  @ViewChild('pass') pass!: ElementRef<HTMLInputElement>;
  islogged: boolean = false;
  constructor(private auth: AuthService, private router: Router) {}
  login() {
    this.auth.login(
      this.Email.nativeElement.value,
      this.pass.nativeElement.value
    );
    this.router.navigateByUrl('/home');
  }
  ngOnInit() {
    this.islogged = this.auth.isLogedIn();
  }
  logOut() {
    this.auth.logout();
    this.islogged = this.auth.isLogedIn();
  }
}
