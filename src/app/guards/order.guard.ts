import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const orderGuard: CanActivateFn = (route, state) => {
  let userSer = inject(AuthService);
  if (userSer.isLogedIn()) {
    return true;
  } else {
    let r = inject(Router);
    r.navigateByUrl('/login');
    return false;
  }
  // userSer.lo().subscribe((data) => {
  //   if (data == false) {
  //     alert('You must Login First');
  //     let r = inject(Router);
  //     r.navigateByUrl('/login');
  //   }
  // });
  // return false;
};
