import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-bidding',
  templateUrl: './bidding.component.html',
  styleUrls: ['./bidding.component.css']
})
export class BiddingComponent implements OnInit, OnChanges {

  pkey: any;
  token: any;
  data: any;
  item: any;
  buyerid: any;
  errorMessage: string;

  rooturl = 'https://microbits-bidding-api.herokuapp.com';
  addedurl = '/api/bid/get?';
  biddingurl = '/api/bid/place?';
  // tslint:disable-next-line: variable-name
  bid_price = 0;
  res: any;
  constructor(private http: HttpClient) {
    this.pkey = localStorage.getItem('pkey');
    this.token = localStorage.getItem('token');
    // sessionStorage.setItem('product', 'lololol');
    this.requestmethod();
   }

  ngOnInit() {
    this.pkey = localStorage.getItem('pkey');
    this.token = localStorage.getItem('token');
    // sessionStorage.setItem('product', 'lololol');
    this.requestmethod();
  }

  ngOnChanges() {
    this.requestmethod();
  }

  requestmethod() {
    this.http.post(this.rooturl + this.addedurl, {
      token : this.token,
      bid_id: this.pkey
    }).subscribe(res => {
      this.data = res;
      this.item = this.data.message.bid;
      console.log(this.item);
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
    this.token = localStorage.getItem('token');
    this.pkey = localStorage.getItem('pkey');
    this.buyerid = localStorage.getItem('username');
    this.http.post(this.rooturl + this.biddingurl, {
      token: this.token,
      bid_id: this.pkey,
      bid_price: this.bid_price,
      buyer_id: this.buyerid
    }).subscribe(response => {
      this.res = response;
      console.log(this.res);
      if (this.res.success === false) {
        this.errorMessage = JSON.stringify(this.res.error);
      } else if (this.res.success === true && this.res.error === 'cannot be sold') {
        this.errorMessage = JSON.stringify(this.res.error);
      } else {
        this.errorMessage = 'Bid Placed Successfully';
      }
    });
    setTimeout(() => {
      this.errorMessage = '';
      this.requestmethod();
    }, 5000);
  }

}
