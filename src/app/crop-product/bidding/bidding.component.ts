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
  item: any = {
    bid: NaN,
    curr_bidprice: NaN,
    curr_highestBidderusername: NaN,
    description: NaN,
    fixed_price: NaN,
    quantity: NaN,
    name: NaN,
    sold_flag: NaN
  };
  buyerid: any;
  errorFlag = false;
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
    this.requestmethod();
  }

  ngOnInit() {
    this.pkey = localStorage.getItem('pkey');
    this.token = localStorage.getItem('token');
    this.requestmethod();
  }

  ngOnChanges() {
    this.requestmethod();
  }

  requestmethod() {
    this.http.post(this.rooturl + this.addedurl, {
      token: this.token,
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
      if (this.res.success === false) {
        this.errorFlag = true;
        this.errorMessage = JSON.stringify(this.res.error);
      } else if (this.res.success === true && this.res.error === 'cannot be sold') {
        this.errorFlag = true;
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
