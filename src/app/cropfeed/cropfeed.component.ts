import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cropfeed',
  templateUrl: './cropfeed.component.html',
  styleUrls: ['./cropfeed.component.css']
})
export class CropfeedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  fetchcontentpage(n: number) {
    console.log(`Page number ${n} is to be shown`);
  }
}
