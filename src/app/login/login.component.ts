import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) {
    if (!!localStorage.getItem('token')) {
      localStorage.removeItem('token');
    }
  }
  name: string;
  password: string;
  data = {};
  rooturl = 'https://dry-harbor-38701.herokuapp.com';
  isLoading = false;
  message = '';
  ngOnInit() {
  }

  login() {
    this.isLoading = true;
    console.log(this.name);
    console.log(this.password);
    if (this.password == undefined || this.name == undefined) {
      throw new Error('EMAIL OR PASSWORD REQUIRED');
    }
    this.data = {
      email: this.name,
      password: this.password
    };
    // Make HTTP request and validate token
    // If token
    const headers = new HttpHeaders().set('Content-Type', `application/json`);
    try {
      this.http.post(this.rooturl + '/loginuser', this.data, { headers }).subscribe(token => {
        console.log(token);
        this.isLoading = false;
        // tslint:disable-next-line: triple-equals
        if (token == 'Email not verified') {
          this.message = 'Email not verified';
          // tslint:disable-next-line: triple-equals
        } else if (token == 'The password is invalid or the user does not have a password.') {
          this.message = 'The password is invalid or the user does not have a password';
          // tslint:disable-next-line: triple-equals
        } else if (token == 'The email address is badly formatted.') {
          this.message = 'The email address is badly formatted';
        } else {
          localStorage.setItem('token', JSON.stringify(token));
          this.router.navigate(['/feed']);
        }
      });
    } catch (err) {
      this.isLoading = false;
      console.log(err);
      this.message = err;
      console.log(err);
    }
    // this.isLoading = false;
    // setTimeout(() => {
    //   this.message = 'This is some error from ourside. Please try again later';
    // }, 10000);
  }
}
