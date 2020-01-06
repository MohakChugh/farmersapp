import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { stringify } from 'querystring';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }
  name: string;
  password: string;
  data = {};
  rooturl = 'https://dry-harbor-38701.herokuapp.com';
  ngOnInit() {
  }

  login() {
    console.log(this.name);
    console.log(this.password);
    this.data = {
      email : this.name,
      password : this.password
    };
    // Make HTTP request and validate token
    // If token
    const headers = new HttpHeaders().set('Content-Type', `application/json`);
    this.http.post(this.rooturl + '/loginuser', this.data , {headers}).subscribe(token => {
      console.log(token);
      // tslint:disable-next-line: triple-equals
      if (token == 'Email not verified') {
        // Display message Email not verified
      // tslint:disable-next-line: triple-equals
      } else if (token == 'The password is invalid or the user does not have a password.') {
        // Display message password incorrect
      } else {
        localStorage.setItem('token', JSON.stringify(token));
        this.router.navigate(['/feed']);
      }
    });
  }
}
