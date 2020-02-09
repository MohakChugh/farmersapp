import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

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
  rooturl = 'https://microbits-bidding-api.herokuapp.com';
  addedurl = '/api/bid/get?';

  
  /**
   *Creates an instance of ShoppingcartComponent.
   * @param {HttpClient} http
   * @param {DataService} DataService
   * @memberof ShoppingcartComponent
   */
  constructor(private http: HttpClient, private DataService: DataService) { }

  /**
   *
   *
   * @memberof ShoppingcartComponent
   */
  ngOnInit() {
    this.pkey = localStorage.getItem('pkey');
    this.token = localStorage.getItem('token');
    this.item = this.DataService.getCrop(this.pkey);
  }

  saveamount() {
    this.DataService.setdata('amount', this.item.price);
  }
}
