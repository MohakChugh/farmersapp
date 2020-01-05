import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: string;
  email: string;
  password: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  register() {
    console.log(this.name);
    console.log(this.email);
    console.log(this.password);
    // Make an HTTP request for register
    // On registeration successful
    this.router.navigate(['/feed']);
  }
}
