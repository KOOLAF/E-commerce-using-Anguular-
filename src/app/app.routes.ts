import { Routes } from '@angular/router';
import { OrderComponent } from './component/order/order.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactComponent } from './component/contact/contact.component';
import { MainLayoutComponent } from './component/main-layout/main-layout.component';
import { LoginComponent } from './component/login/login.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { orderGuard } from './guards/order.guard';
import { AddProductComponent } from './component/add-product/add-product.component';
import { RegComponent } from './component/reg/reg.component';
import { UpdateComponent } from './component/update/update.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: OrderComponent, canActivate: [orderGuard] },
      { path: 'aboutUs', component: AboutUsComponent },
      { path: 'contactUs', component: ContactComponent },
      { path: 'details/:id', component: ProductDetailsComponent },
      { path: 'add', component: AddProductComponent },
      { path: 'reg', component: RegComponent },
      { path: 'edit/:id', component: UpdateComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
];
