import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  pkey: any;
  token: any;
  data: any;
  item: any;
  rooturl = 'https://microbits-bidding-api.herokuapp.com';
  addedurl = '/api/bid/get?';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.pkey = localStorage.getItem('pkey');
    this.token = localStorage.getItem('token');
    // sessionStorage.setItem('product', 'lololol');
    this.http.post(this.rooturl + this.addedurl, {
      token : this.token,
      bid_id: this.pkey
    }).subscribe(res => {
      this.data = res;
      this.item = this.data.message.bid;
    });
  }

  saveamount() {
    localStorage.setItem('amount', this.item.price);
    sessionStorage.setItem('amount', this.item.price);
  }
}
