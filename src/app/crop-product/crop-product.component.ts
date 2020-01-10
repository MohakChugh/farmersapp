import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crop-product',
  templateUrl: './crop-product.component.html',
  styleUrls: ['./crop-product.component.css']
})
export class CropProductComponent implements OnInit {

  bidding = false;
  pkey: any;
  token: any;
  time: Date;
  rooturl = 'https://microbits-bidding-api.herokuapp.com';
  addedurl = '/api/bid/get?';
  timeout = false;
  endtime: any;
  data: any = {
    message: {
      bid: NaN,
      curr_bidprice: NaN,
      curr_highestBidderusername: NaN,
      description: NaN,
      fixed_price: NaN,
      quantity: NaN,
      name: NaN
    }
  };
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

  constructor(private http: HttpClient) {
    this.pkey = localStorage.getItem('pkey');
    this.token = localStorage.getItem('token');
    this.http.post(this.rooturl + this.addedurl, {
      token: this.token,
      bid_id: this.pkey
    }).subscribe(res => {
      this.data = res;
      this.item = this.data.message.bid;
      this.time = new Date();
      this.endtime = new Date(this.item.timer_end);
      if (this.time > this.endtime) {
        this.timeout = true;
      }
    });
  }

  ngOnInit() {
  }

  togglebidding() {
    this.bidding = true;
  }

}
