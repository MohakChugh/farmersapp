import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  checkloggedin() {
    return !!localStorage.getItem('token');
  }
  constructor(private router: Router) { }

  canActivate() {
    if (this.checkloggedin()) {
      console.log('User not logged in!');
      return true;
    } else {
      console.log('user logged in!');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
