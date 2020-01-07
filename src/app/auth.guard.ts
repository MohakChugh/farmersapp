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
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
