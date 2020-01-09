import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bidding',
  templateUrl: './bidding.component.html',
  styleUrls: ['./bidding.component.css']
})
export class BiddingComponent implements OnInit {

  pkey: any;
  token: any;
  data: any;
  item: any;
  rooturl = 'https://microbits-bidding-api.herokuapp.com';
  addedurl = '/api/bid/get?';
  // tslint:disable-next-line: variable-name
  bid_price = 0;
  constructor(private http: HttpClient) {
    this.pkey = localStorage.getItem('pkey');
    this.token = localStorage.getItem('token');
    // sessionStorage.setItem('product', 'lololol');
    this.http.post(this.rooturl + this.addedurl, {
      token : this.token,
      bid_id: this.pkey
    }).subscribe(res => {
      this.data = res;
      this.item = this.data.message.bid;
      console.log(this.item);
    });
   }

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

  increaseby1() {
    this.bid_price += 500;
  }

  decreaseby1() {
    this.bid_price -= 500;
  }

  placebid() {
    console.log(this.bid_price);
    // Make Http request to save the details of bid
  }

}
