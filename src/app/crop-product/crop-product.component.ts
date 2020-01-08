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
  rooturl = 'http://localhost:3000';
  addedurl = '/api/bid/get?';
  data: any = {
    message : {
      bid : NaN,
      curr_bidprice: NaN,
      curr_highestBidderusername: NaN,
      description: NaN,
      fixed_price: NaN,
      quantity: NaN,
      name: NaN
    }
  };
  item: any = {
    message : {
      bid : NaN,
      curr_bidprice: NaN,
      curr_highestBidderusername: NaN,
      description: NaN,
      fixed_price: NaN,
      quantity: NaN,
      name: NaN
    }
  };

  constructor(private http: HttpClient) {
    this.pkey = localStorage.getItem('pkey');
    this.token = localStorage.getItem('token');
    this.http.post(this.rooturl + this.addedurl, {
      token : this.token,
      bid_id: this.pkey
    }).subscribe(res => {
      this.data = res;
      // console.log(this.data.message.bid);
      this.item = this.data.message.bid;
      console.log(this.item);
    });
   }

  ngOnInit() {
  }

  togglebidding() {
    this.bidding = true;
  }

}
