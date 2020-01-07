import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  isLoading = false;
  message = '';
  ngOnInit() {
  }

  login() {
    this.isLoading = true;
    console.log(this.name);
    console.log(this.password);
    this.data = {
      email : this.name,
      password : this.password
    };
    // Make HTTP request and validate token
    // If token
    const headers = new HttpHeaders().set('Content-Type', `application/json`);
    try {
      this.http.post(this.rooturl + '/loginuser', this.data , {headers}).subscribe(token => {
        console.log(token);
        this.isLoading = false
;        // tslint:disable-next-line: triple-equals
        if (token == 'Email not verified') {
          // Display message Email not verified
          this.message = 'Email not verified';
        // tslint:disable-next-line: triple-equals
        } else if (token == 'The password is invalid or the user does not have a password.') {
          // Display message password incorrect
          this.message = 'The password is invalid or the user does not have a password';
        } else {
          localStorage.setItem('token', JSON.stringify(token));
          this.router.navigate(['/feed']);
        }
      });
    } catch (err) {
      console.log(err);
      this.message = err;
      console.log(err);
    }

  }
}
