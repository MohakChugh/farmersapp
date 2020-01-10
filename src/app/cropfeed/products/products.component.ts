import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  items = [];
  rooturl = 'https://microbits-bidding-api.herokuapp.com';
  addedurl = '/api/bid?';
  token: any;
  res: any;
  timeout: Array<boolean> = [false];
  endtime: Array<Date> = [new Date()];
  time: Date;

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
    http.post(this.rooturl + this.addedurl, { token: this.token })
      .subscribe(response => {
        this.res = response;
        this.items = this.res.message.bids;
        console.table(this.items);
        for (let index = 0; index < this.items.length; index++) {
          const element = this.items[index];
          this.time = new Date();
          console.log(this.time)
          this.endtime[index] = new Date(element.timer_end);
          console.log(this.endtime[index]);
          if (this.time > this.endtime[index]) {
            this.timeout[index] = true;
          }
        }
      });
  }

  ngOnInit() {
  }

  savedetailsofitem(i) {
    localStorage.setItem('pkey', this.items[i]._id);
  }
}
