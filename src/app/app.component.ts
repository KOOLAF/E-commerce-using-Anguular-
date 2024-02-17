import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { ProductComponent } from './component/product/product.component';
import { FooterComponent } from './component/footer/footer.component';
import { OrderComponent } from './component/order/order.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactComponent } from './component/contact/contact.component';
import { LoginComponent } from './component/login/login.component';
import { MainLayoutComponent } from './component/main-layout/main-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    NavBarComponent,
    ProductComponent,
    FooterComponent,
    OrderComponent,
    RouterOutlet,
    AboutUsComponent,
    ContactComponent,
    LoginComponent,
    MainLayoutComponent
  ],
})
export class AppComponent {
  title = 'day2ass';
}
