import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-related-products',
  templateUrl: './related-products.component.html',
  styleUrls: ['./related-products.component.css']
})
export class RelatedProductsComponent implements OnInit {

  token: any;
  rooturl = 'https://microbits-bidding-api.herokuapp.com';
  addedurl = '/api/bid?';
  res: any;
  items = [];

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

}
