import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bidding',
  templateUrl: './bidding.component.html',
  styleUrls: ['./bidding.component.css']
})
export class BiddingComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  bid_price = 0;
  constructor() { }

  ngOnInit() {
  }
  increaseby1() {
    this.bid_price += 1;
  }

  decreaseby1() {
    this.bid_price -= 1;
  }

}
