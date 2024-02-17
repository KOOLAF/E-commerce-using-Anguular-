import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  isLoged: boolean = false;
  constructor(private auth: AuthService) {}
  ngOnInit() {
    this.isLoged = this.auth.isLogedIn();
  }
  logOut() {
    this.auth.logout();
    this.isLoged = this.auth.isLogedIn();
  }
}
