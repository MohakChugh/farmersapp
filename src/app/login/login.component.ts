import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  name: string;
  password: string;

  ngOnInit() {
  }

  login() {
    console.log(name);
    console.log(this.password);
    // Make HTTP request and validate token
    // If token
    this.router.navigate(['/feed']);
  }
}
