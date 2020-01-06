import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: string;
  email: string;
  password: string;
  message = '';
  data = {};
  rooturl = 'https://dry-harbor-38701.herokuapp.com';
  addedurl = '/registeruser';
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }
  register() {
    console.log(this.name);
    console.log(this.email);
    console.log(this.password);
    // Make an HTTP request for register
    // On registeration successful
    this.data = {
      email: this.email,
      password: this.password,
      name: this.name
    };
    JSON.stringify(this.data);
    console.log(this.data);

    // const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post(this.rooturl + this.addedurl, this.data, {responseType: 'text'}).subscribe(token => {
      console.log(token);
      // tslint:disable-next-line: triple-equals
      if (token == 'Email link sent to verify email') {
        this.message = 'Please check your email to verify the Authenticated email';
      } else {
        this.message = 'Error while Registering User. Please Check your details and try again';
      }
    });

    // this.router.navigate(['/feed']);
  }
}
