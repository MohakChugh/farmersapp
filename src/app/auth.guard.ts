import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  /**
   *
   *
   * @returns
   * @memberof AuthGuard
   */
  checkloggedin() {
    return !!localStorage.getItem('token');
  }
  constructor(private router: Router) { }

  /**
   *
   *
   * @returns
   * @memberof AuthGuard
   */
  canActivate() {
    if (this.checkloggedin()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
