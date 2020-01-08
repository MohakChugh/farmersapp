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
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
    http.post(this.rooturl + this.addedurl, { token : this.token})
    .subscribe(response => {
      this.res = response;
      console.table(this.res.message.bids);
      this.items = this.res.message.bids;
    });
   }

  ngOnInit() {
  }

  savedetailsofitem(i) {
    console.log('lets have sex baby');
    console.log(i);
    console.log(this.items[i]);
    localStorage.setItem('pkey', this.items[i]._id);
  }
}
