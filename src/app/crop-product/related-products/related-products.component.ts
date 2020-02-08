import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

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
  timeout: Array<boolean> = [false];
  endtime: Array<Date> = [new Date()];
  time: Date;

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private http: HttpClient, private DataService: DataService) {
    this.token = localStorage.getItem('token');
    // http.post(this.rooturl + this.addedurl, { token: this.token })
    //   .subscribe(response => {
    //     this.res = response;
    //     this.items = this.res.message.bids;
    //     for (let index = 0; index < this.items.length; index++) {
    //       const element = this.items[index];
    //       this.time = new Date();
    //       this.endtime[index] = new Date(element.timer_end);
    //       if (this.time > this.endtime[index]) {
    //         this.timeout[index] = true;
    //       }
    //     }
    //   });


    this.items = this.DataService.getter().items;
    for (let index = 0; index < this.items.length; index++) {
      const element = this.items[index]; this.time = new Date();
      this.time = new Date();
      this.endtime[index] = new Date(element.timer_end);
      if (this.time > this.endtime[index]) {
        this.timeout[index] = true;
      }
    }
  }

  ngOnInit() {
  }

}
