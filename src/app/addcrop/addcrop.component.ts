import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-addcrop',
  templateUrl: './addcrop.component.html',
  styleUrls: ['./addcrop.component.css']
})
export class AddcropComponent implements OnInit {

  name = '';
  quantity = 0;
  biddingPrice = 0;
  buyNow = 0;
  description = '';
  rooturl = 'https://microbits-bidding-api.herokuapp.com';
  addedurl = '/api/bid/create?';
  imageurl = 'http://dummyurlforcrops.com';
  token: any;
  res: any;
  message = '';
  // tslint:disable-next-line: variable-name
  timer_limit: any;
  isuploading = false;
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
  }

  ngOnInit() {
  }

  post() {
    this.isuploading = true;
    const headers = new HttpHeaders().set('Content-Type', `application/json`);
    this.http.post(this.rooturl + this.addedurl, {
      item_name: this.name,
      item_description: this.description,
      image_url: this.imageurl,
      min_price: this.biddingPrice,
      buy_now_price: this.buyNow,
      quantity: this.quantity,
      timer_limit: this.timer_limit,
      token: this.token
    }, { headers })
    .subscribe(response => {
      this.isuploading = false;
      this.res = response;
      if (this.res.error === null) {
        if (this.res.success === true) {
          this.message = this.res.message.status;
          setTimeout(() => {
            this.message = '';
          }, 5000);
        }
      }
    });
  }

}
